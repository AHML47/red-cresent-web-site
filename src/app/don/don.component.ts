import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DonnationService } from '../donnation.service';
import {firebaseConfig} from "../environments/environment";

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { MatDialogRef , MatDialog } from '@angular/material/dialog';
import { MonyDonService } from '../mony-don.service';
import { GetCardComponent } from '../get-card/get-card.component';


@Component({
  selector: 'app-don',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl : './don.component.html' ,
  styleUrls: ['./don.component.css'] 
})
export class DonComponent {
  constructor (private don:DonnationService){}
  user = {
    id :'',
    gouvernorat: '',
    ville: '',
    adresse: '',
    telephone: '',
    type: ''
  };

  governorates = [
    "Ariana", "Béja", "Ben Arous", "Bizerte", "Gabès",
    "Gafsa", "Jendouba", "Kairouan", "Kasserine", 
    "Kébili", "Mahdia", "Manouba", "Medenine", 
    "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", 
    "Siliana", "Tataouine", "Tozeur", "Tunis", "Zaghouan"
  ];

  cities: string[] = [];
  showMessage = false; 

  updateCities() {
    interface CityMap {
      [key: string]: string[];
    }
    const cityMap: CityMap = {
      "Ariana": ["Ariana", "Raoued", "Ettadhamen"],
      "Béja": ["Béja", "Nefza", "Testour"],
      "Ben Arous": ["Ben Arous", "Mahares", "Mornag"],
      "Bizerte": ["Bizerte", "Menzel Bourguiba", "Tinja"],
      "Gabès": ["Gabès", "Mareth", "Menzel"],
      "Gafsa": ["Gafsa", "Metlaoui", "Redeyef"],
      "Jendouba": ["Jendouba", "Bousalem", "Oued Meliz"],
      "Kairouan": ["Kairouan", "El Alia", "Haffouz"],
      "Kasserine": ["Kasserine", "Thala", "Sbiba"],
      "Kébili": ["Kébili", "Douz", "Fougar"],
      "Mahdia": ["Mahdia", "Chebba", "Ksar es Souk"],
      "Manouba": ["Manouba", "Djedeida", "Tebourba"],
      "Medenine": ["Medenine", "Ben Guerdane", "Zarzis"],
      "Monastir": ["Monastir", "Ksar es Souk", "Bembla"],
      "Nabeul": ["Nabeul", "Hammamet", "Kalaa Kebira", "Beni Khalled"],
      "Sfax": ["Sfax", "Skhira", "Mahrès"],
      "Sidi Bouzid": ["Sidi Bouzid", "Meknassi", "Ouled Haffouz"],
      "Siliana": ["Siliana", "Kasserine", "Bargou"],
      "Tataouine": ["Tataouine", "Ghomrassen", "Bir Lahmar"],
      "Tozeur": ["Tozeur", "Nefta", "Chébika"],
      "Tunis": ["Tunis", "La Marsa", "Carthage"],
      "Zaghouan": ["Zaghouan", "Zaghouan", "Saouaf"]
    };

    this.cities = cityMap[this.user.gouvernorat] || [];
  }

  async onSubmit() {
    this.showMessage = true; 
   const app = initializeApp(firebaseConfig);
   const database = getFirestore(app);
   const donColl = collection(database,"physical_don");
   this.user.id = (await getDoc(doc(donColl,"id"))).get("next_id");
   await setDoc(doc(donColl,"id"),{
    next_id:(Number(this.user.id)+1).toString()
  });
  await setDoc(doc(donColl,this.user.id), {
    userFirstName:await this.don.getUserFirstName(),
      userLastName:await  this.don.getUserLastName() ,
      userID:await this.don.getUserId(),
    id :this.user.id,
    gouvernorat: this.user.gouvernorat,
    ville: this.user.ville,
    adresse: this.user.adresse,
    telephone: this.user.telephone,
    type: this.user.type
  });
  console.log("sebon teb3ath");
}
}