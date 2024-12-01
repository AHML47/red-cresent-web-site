import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-don-list-phy',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './don-list-phy.component.html',
  styleUrl: './don-list-phy.component.css'
})
export class DonListPhyComponent {
  constructor() {}
  donnations: donnation[] = [];

  app=initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  collectionRef = collection(this.db, "physical_don");
  ngOnInit() {
    this.getAllDon();
  }
  async getAllDon(){
   const a = await getDocs(this.collectionRef) ;
   this.donnations = a.docs.map(doc => ({ lid: doc.id, ...doc.data() as donnation}))
    console.log(this.donnations);
  }

}
interface donnation {
  adresse: string;    // Represents the card holder's name, e.g., "dsf"
  gouvernorat: string;       // Represents the card number, e.g., "123456789"
  telephone: string ;    // Represents the CVV, which can be null
  ville: string;    // Represents the card's expiry date, e.g., "12/85"
  id: string;            // Represents the unique ID, e.g., "27"
  type: string;       // Represents the amount, e.g., "50"
  userFirstName: string;
  userLastName: string;
  userID: string; // Represents the user's first name, e.g., "ahmed"
}
