import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {firebaseConfig} from "../environments/environment";
import { ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection,CollectionReference,getDocs, doc, setDoc,getDoc } from "firebase/firestore";
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
import { get } from 'http';
import { NgStyle } from '@angular/common'; 
import { getStorage , ref , getDownloadURL} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { IconArticleComponent } from '../icon-article/icon-article.component';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  formations:formation [] = [];
  db = getFirestore(firebase.initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  arRef = collection(this.db, "formation");
  storage = getStorage(initializeApp(firebaseConfig));

  ngOnInit() {this.getFormation();}

  async getFormation(){
    
    const snapshot = await getDocs(this.arRef);
    this.formations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as formation}));
    console.log(this.formations);
  }

}
interface formation {
  title: string
      date: string;
      location: string;
      hide:boolean;
}
