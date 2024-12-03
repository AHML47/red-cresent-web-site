import { Injectable } from '@angular/core';
import { DonnationService } from './donnation.service';
import { Component } from '@angular/core';
import {firebaseConfig} from "./environments/environment";
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class MonyDonService {

  constructor(private don: DonnationService,private s:SecurityService) { }
  monyDon ={
    id:'',
    montant:'',
    cardNum: '',          // Card number as a string to allow spaces or dashes
    cardHolder: '',       // Cardholder's name
    expiryDate: '',       // Expiry date (e.g., 'MM/YY')
    cvv: ''

  };

  app = initializeApp(firebaseConfig);
  database = getFirestore(this.app);
  donColl = collection(this.database,"donetions");

  public setMonatn(s:string){
    
    this.monyDon.montant=s;
  }
  public setCardDetails(cardNum:string,cardHolder:string,expiryDate:string,cvv:string){
    this.monyDon.cardNum = cardNum;
    this.monyDon.cardHolder = cardHolder;
    this.monyDon.expiryDate = expiryDate;
    this.monyDon.cvv = cvv;
    console.log(this.monyDon);
    
  }
  public async sendMony(){
    this.monyDon.id = (await getDoc(doc(this.donColl,"id"))).get("next_id");
    console.log(this.don.getUserFirstName());
    await setDoc(doc(this.donColl, this.monyDon.id), {
      
      userFirstName:        this.s.encryptData(await this.don.getUserFirstName()),
      userLastName:         this.s.encryptData(await  this.don.getUserLastName()) ,
      userID:               this.s.encryptData(await this.don.getUserId()),
      cardNum:              this.s.encryptData(this.monyDon.cardNum),
      cardHolder:           this.s.encryptData(this.monyDon.cardHolder),
      expiryDate:           this.s.encryptData(this.monyDon.expiryDate),
      cvv:                  this.s.encryptData(this.monyDon.cvv),
      montant:              this.s.encryptData(this.monyDon.montant),
      id:                   this.s.encryptData(this.monyDon.id)
    });
    await setDoc(doc(this.donColl,"id"),{
      next_id:(Number(this.monyDon.id)+1).toString()
    });
    //this.closeModal();
    }
}
