import { Component, OnInit } from '@angular/core';
import {firebaseConfig} from "../environments/environment";
import { collection, doc, setDoc,getDoc } from "firebase/firestore";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { MatDialogRef,MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { AdminControlComponent } from '../admin-control/admin-control.component';
import { User } from 'firebase/auth';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-show-user',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './show-user.component.html',
  styleUrl: './show-user.component.css'
})
export class ShowUserComponent {
  constructor(public dialogRef: MatDialogRef<ShowUserComponent>,private authService: AuthService,private matDialog: MatDialog) {}
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
    is_add:false
  };

  ngOnInit() {this.getUser();}
  db = getFirestore(initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  
  closeModal(): void {
    this.dialogRef.close("sLogin");
    }
coll="";
  is_add=false;
  async getUser() {
    const userId =await this.authService.getUserId();
  
  const usRef = collection(this.db,"useres");
  const docSnap =  await getDoc(doc(usRef,userId));
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
    this.user.is_add =docSnap.get("admin");
  } else {
    console.log("No such document!");
    
  }
   }
  logOut(){
    this.authService.logout();
    this.dialogRef.close("logout");
  }
  openAdd(){
    this.matDialog.closeAll();
  }
    
}
