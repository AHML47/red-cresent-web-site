//import { Component } from '@angular/core';
import { Component, Input , ElementRef, ViewChild } from '@angular/core';
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
import { NgStyle } from '@angular/common'; 
import { getStorage , ref , getDownloadURL} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { ShowedArticleService } from '../showed-article.service';
import { RouterLink } from '@angular/router';
import { ShowArticleComponent } from '../show-article/show-article.component';
@Component({
  selector: 'app-icon-article',
  standalone: true,
  imports: [NgStyle,RouterLink],
  templateUrl: './icon-article.component.html',
  styleUrl: './icon-article.component.css'
})
export class IconArticleComponent {
  constructor (public x:ShowedArticleService){}
  @Input() titel="";
  @Input() subject="";
  @Input() text="";
  id="";
  @Input() imgURL : String ="";
  
  ngOnInit() {console.log(this.id);
    //this.get_id();
   const storage = getStorage(initializeApp(firebaseConfig));
  console.log(this.titel);
  if (this.imgURL && this.imgURL.trim() !== "") {
    getDownloadURL(ref(storage, this.imgURL.toString()))
      .then((url) => {
        const button = document.getElementById(this.titel);
        if (button) {
          button.style.backgroundImage = `url(${url})`;
        }
      })
      .catch((error) => {
        console.error("Error fetching image URL: ", error);
      });
  }
}
go_to_art(){
  this.x.set_subject(this.titel);
  this.x.set_text(this.text);
  this.x.set_subject(this.subject);
  this.x.set_img(this.imgURL.toString());
}
//  @ViewChild('myButton') button!: ElementRef<HTMLButtonElement>;
  //button.nativeElement.style.backgroundImage= "url("+this.imgURL.toString()+")";
  //buttonStyles: { [key: string]: string } = {'background-image': 'url('+this.imgURL+')'};
/*
 
*/
/*
  db = getFirestore(firebase.initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  arRef = collection(this.db, "articeles");
  storage = getStorage(initializeApp(firebaseConfig));
  
  async getArticles() {
   const docSnap =  await getDoc(doc(this.arRef, "testph"));
   this.titel=docSnap.get("title");
   this.subject=docSnap.get("subject");
   this.text=docSnap.get("text");
   storageRef = ref(this.storage, this.imgURL.toString());
   //console.log(storageRef);
   a = getDownloadURL(this.storageRef) // Use ref to create a path
   .then((url) => {
     const button = document.getElementById('btn');
     if (button) {
       button.style.backgroundImage = "url(" + url + ")";
     }
   })
   .catch((error) => {
     console.error("Error getting download URL: ", error);
   });*/

}

