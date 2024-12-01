import { Component } from '@angular/core';
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { MatDialogRef } from '@angular/material/dialog';
import { MonyDonService } from '../mony-don.service';

@Component({
  selector: 'app-get-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './get-card.component.html',
  styleUrl: './get-card.component.css'
})
export class GetCardComponent {
  constructor(public sendSer: MonyDonService,public dialogRef: MatDialogRef<GetCardComponent>) {
    
  }
  donation = {
    cardNum: '',          // Card number as a string to allow spaces or dashes
    cardHolder: '',       // Cardholder's name
    expiryDate: '',       // Expiry date (e.g., 'MM/YY')
    cvv: ''               // CVV code
  };
  async sendMony(){
    this.sendSer.setCardDetails(this.donation.cardNum,this.donation.cardHolder,this.donation.expiryDate,this.donation.cvv);
   await this.sendSer.sendMony();
   this.dialogRef.close();
  }
}
