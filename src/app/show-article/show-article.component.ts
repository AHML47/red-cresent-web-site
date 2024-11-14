import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from "@angular/core";
//import firebase from              "firebase/app"; // (1)
import {firebaseConfig} from "../environments/environment";
import * as fb from 'firebase/firestore';
import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc,getDoc } from "firebase/firestore";
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { get } from 'http';
import { getStorage , ref , getDownloadURL} from "firebase/storage";
import { initializeApp } from "firebase/app";


@Component({
  selector: 'app-show-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-article.component.html',
  styleUrl: './show-article.component.css'
})
export class ShowArticleComponent implements OnInit {
  titel="";
  subject="";
  text="";
  

  ngOnInit() {this.getArticles();}

  db = getFirestore(firebase.initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  arRef = collection(this.db, "articeles");
  storage = getStorage(initializeApp(firebaseConfig));
  
  async getArticles() {
   const docSnap =  await getDoc(doc(this.arRef, "testph"));
   this.titel=docSnap.get("title");
   this.subject=docSnap.get("subject");
   this.text=docSnap.get("text");
   const a= getDownloadURL(ref(this.storage,docSnap.get("image") ))
  .then((url) => {
     const img = document.getElementById('myimg');
     img?.setAttribute('src', url);
    
  });
   

   


  }


}
