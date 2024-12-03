//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from "@angular/core";
//import firebase from              "firebase/app"; // (1)
import {firebaseConfig} from "../environments/environment";
import { ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection,CollectionReference,getDocs, doc, setDoc,updateDoc } from "firebase/firestore";
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { get } from 'http';
import { NgStyle } from '@angular/common'; 
import { getStorage , ref , getDownloadURL} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { IconArticleComponent } from '../icon-article/icon-article.component';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-liste-article-admin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './liste-article-admin.component.html',
  styleUrl: './liste-article-admin.component.css'
})
export class ListeArticleAdminComponent {
  articeles: Article[] = [];
  artIndex=0;

  ngOnInit() {this.getArticles();}

  db = getFirestore(firebase.initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  //arRef = collection(this.db, "articeles");
  storage = getStorage(initializeApp(firebaseConfig));
  
  async getArticles() {
    
   /*const docSnap =  await getDocs(this.arRef);
   console.log(docSnap);*/
   const colRef: CollectionReference = collection(this.db, "articeles");
    const snapshot = await getDocs(colRef);
    this.articeles = snapshot.docs.map(doc => ({ lid: doc.id, ...doc.data() as Article}))
  /*    this.articele.titel=y[4].title;
    this.articele.subject=y[4].subject;
       this.articele.text=y[4].text;
    this.articele.imgURL =y[4].image;*/
    console.log(this.articeles);

    

  }
  b=true;
  async hideArt(x:string){
    console.log(x);
    const article = this.articeles.find(art => art.title === x);
      if (article) {
        article.hide = !article.hide ;
        this.b=article.hide;
      }
    const docRef = doc(this.db, "articeles", x); // Reference the specific document
      await updateDoc(docRef, { hide:this.b }); // Update the 'hide' field to true
      
      
      // Optionally update the local state
      

  }
  async removeArt(x:string){
    console.log(x);
    const article = this.articeles.find(art => art.title === x);
      if (article) {
        article.show = !article.show ;
        this.b=article.show;
      }
    const docRef = doc(this.db, "articeles", x); // Reference the specific document
      await updateDoc(docRef, { show:this.b }); // Update the 'hide' field to true
      
      
      // Optionally update the local state
      

  }


  getclass(x:string){
    const article = this.articeles.find(art => art.title === x);
    if(article){
      if (article.hide) {
        return "a";
      }else{
        return "b";
      }
  }else{return "c";}
}
getclass2(x:string){
  const article = this.articeles.find(art => art.title === x);
  if(article){
    if (article.show) {
      return "b";
    }else{
      return "a";
    }
}else{return "c";}
}
}

 interface Article {
  id:string;
  image: string;
  subject: string;
  text:string;
  title: string;
  show:boolean;
  hide:boolean;
}


