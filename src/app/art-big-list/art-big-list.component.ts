//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
//import { Component, OnInit } from "@angular/core";
//import firebase from              "firebase/app"; // (1)
import {firebaseConfig} from "../environments/environment";
import { ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection,CollectionReference,getDocs, doc, setDoc,getDoc } from "firebase/firestore";
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
  selector: 'app-art-big-list',
  standalone: true,
  imports: [FormsModule,CommonModule,IconArticleComponent],
  templateUrl: './art-big-list.component.html',
  styleUrl: './art-big-list.component.css'
})
export class ArtBigListComponent {

  articeles: Article[] = [];
  artIndex=0;

  ngOnInit() {this.getArticles();}

  db = getFirestore(firebase.initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);
  arRef = collection(this.db, "articeles");
  storage = getStorage(initializeApp(firebaseConfig));
  
  async getArticles() {
    
   /*const docSnap =  await getDocs(this.arRef);
   console.log(docSnap);*/
   const colRef: CollectionReference = collection(this.db, "articeles");
    const snapshot = await getDocs(colRef);
    this.articeles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as Article}))
  /*    this.articele.titel=y[4].title;
    this.articele.subject=y[4].subject;
       this.articele.text=y[4].text;
    this.articele.imgURL =y[4].image;*/
    console.log(this.articeles);

    

   //const a= getDownloadURL(ref(this.storage,docSnap.get("image") ))
  
}
@ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  scrollLeft() {
    this.artIndex=this.artIndex-2;
    console.log(this.artIndex);
    if(this.artIndex<0){
      console.log("d5al");
      this.artIndex=this.articeles.length;
      this.scrollContainer.nativeElement.scrollBy({
        left: 460*this.artIndex, // Adjust based on item width and margin
        behavior: 'smooth'
      }); 
    }else{
      this.scrollContainer.nativeElement.scrollBy({
        left: -460, // Adjust based on item width and margin
        behavior: 'smooth'
  
      });
    }
    
    
  }

  scrollRight() {
    this.artIndex=this.artIndex+2;
    console.log(this.artIndex);
    if(this.artIndex>this.articeles.length){
      console.log("d5al");
      
      this.scrollContainer.nativeElement.scrollBy({
        left: -460*this.artIndex, // Adjust based on item width and margin
        behavior: 'smooth'
      });
      this.artIndex=0; 
    }else{
      this.scrollContainer.nativeElement.scrollBy({
        left: 460, // Adjust based on item width and margin
        behavior: 'smooth'
  
      });
    }
  }

}

 interface Article {
 
  image: string;
  subject: string;
  text:string;
  title: string;
}
