import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SecurityService } from '../security.service';
@Component({
  selector: 'app-don-list-mon',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './don-list-mon.component.html',
  styleUrl: './don-list-mon.component.css'
})
export class DonListMonComponent {
  constructor(private s:SecurityService) {}
  donnations: donnation[] = [];

  app=initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  collectionRef = collection(this.db, "donetions");
  ngOnInit() {
    this.getAllDon();
  }
  async getAllDon(){
   const a = await getDocs(this.collectionRef) ;
   this.donnations = a.docs.map(doc => ({ lid: doc.id, ...doc.data() as donnation}))
    console.log(this.donnations);

    
  
    console.log(this.donnations);
  }
  decrypt(x:string){
    return this.s.decryptData(x);
  }

}
interface donnation {
  cardHolder: string;    // Represents the card holder's name, e.g., "dsf"
  cardNum: string;       // Represents the card number, e.g., "123456789"
  cvv: string ;    // Represents the CVV, which can be null
  expiryDate: string;    // Represents the card's expiry date, e.g., "12/85"
  id: string;            // Represents the unique ID, e.g., "27"
  montant: string;       // Represents the amount, e.g., "50"
  userFirstName: string;
  userLastName: string;
  userID: string; // Represents the user's first name, e.g., "ahmed"
}
