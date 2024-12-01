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
import { ShowedArticleService } from '../showed-article.service';


@Component({
  selector: 'app-show-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './show-article.component.html',
  styleUrl: './show-article.component.css'
})
export class ShowArticleComponent implements OnInit {
  constructor(private sh:ShowedArticleService){}

  titel="";
  subject="";
  text="";
  img="";
  

  ngOnInit() {
    this.subject=this.sh.get_subject();
    this.titel=this.sh.get_titel();
    this.text=this.sh.get_text();
    this.img=this.sh.get_img();
    this.getArtPhoto();
    
  }

 /* db = getFirestore(firebase.initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  arRef = collection(this.db, "articeles");
  storage = getStorage(initializeApp(firebaseConfig));*/
  
  async getArtPhoto() {
    const storage = getStorage(initializeApp(firebaseConfig));
    console.log(this.titel);
    if (this.img && this.img.trim() !== "") {
      getDownloadURL(ref(storage, this.img.toString()))
        .then((url) => {
          const img = document.getElementById('myimg');
     img?.setAttribute('src', url);
     console.log("haka lien :");
     console.log(url);
        })
        .catch((error) => {
          console.error("Error fetching image URL: ", error);
        });
    }







/*
   const docSnap =  await getDoc(doc(this.arRef, this.titel));
   if (this.img && this.img.trim() !== "") {

   const a= getDownloadURL(ref(this.storage,this.img.toString() ))
  .then((url) => {
     
    
  }).catch((error) => {
    console.error("Error fetching image URL: ", error);
  });}*/
   

   


  }


}
