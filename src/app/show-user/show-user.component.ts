import { Component, OnInit } from '@angular/core';
import {firebaseConfig} from "../environments/environment";
import { collection, doc, setDoc,getDoc } from "firebase/firestore";
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { User } from 'firebase/auth';


@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {
  constructor(public dialogRef: MatDialogRef<ShowUserComponent>,private authService: AuthService) {}
  user = {
    id: '',
    nom: '',
    prenom: '',
    occupation: '',
    age: null,
    niveauEtude: '',
    email: '',
    telephone: '',
    gouvernorat: '',
    ville: '', 
  };

  ngOnInit() {this.getUser();}
  db = getFirestore(initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  usRef = collection(this.db, "useres");
  closeModal(): void {
    this.dialogRef.close("sLogin");
    }

  
  async getUser() {
    const userId = this.authService.getUserId();
    const docSnap =  await getDoc(doc(this.usRef, userId?.toString()));
    if (docSnap.exists()) {
      this.user.id = docSnap.get("id");
      this.user.nom = docSnap.get("first_name");
      this.user.prenom = docSnap.get("last_name");
      this.user.occupation = docSnap.get("occupation");
      this.user.age = docSnap.get("age");
      this.user.niveauEtude = docSnap.get("niveau_etude");
      this.user.email = docSnap.get("email");
      this.user.telephone = docSnap.get("phon_num");
      this.user.gouvernorat = docSnap.get("gouvernorat");
      this.user.ville = docSnap.get("ville");
    } else {
      console.log("No such document!");
    }
   }
  logOut(){
    this.authService.logout();
    this.dialogRef.close("logout");
  }
    
}
