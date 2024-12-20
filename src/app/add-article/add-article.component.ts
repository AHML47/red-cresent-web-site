import { Component, OnInit } from "@angular/core";
//import firebase from              "firebase/app"; // (1)
import {firebaseConfig} from "../environments/environment";
//import * as fb from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc ,getDoc} from "firebase/firestore";
//import { isPlatformBrowser } from '@angular/common';
//import {  Inject, PLATFORM_ID } from '@angular/core';
import { getStorage , ref , uploadBytes} from "firebase/storage";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  
  id="";
  app = initializeApp(firebaseConfig);
  arTitel = '';
  arSub='';
  arText=""; // (2)
  arPhtoto:any ;
  //file : any;
  Aname="";
  Fname="";
  score = 0;
 
 // constructor(@Inject(PLATFORM_ID) private platformId: any) {}
/*
  ngOnInit() {
    /*if (isPlatformBrowser(this.platformId)) {
      // This block will only run in the browser
      console.log('Running in the browser, safe to use window object');
      console.log(window.location.href);
    }
  }*/
    async get_id(){
    const db = getFirestore(this.app);
    const app = initializeApp(firebaseConfig);
    const arRef = collection(db, "articeles");
    this.id=(await getDoc(doc(arRef,"id"))).get("next_id");
    
    
     await setDoc(doc(arRef,"id"),{
      next_id:(Number(this.id)+1).toString()
    });
    }



    onFileChange(event: Event)  {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
         this.arPhtoto = input.files[0];
        
        // Vous pouvez stocker le fichier si nécessaire
      }
  
    }
async addArticle() { // (3)
  const db = getFirestore(this.app);
    const app = initializeApp(firebaseConfig);
    const arRef = collection(db, "articeles");
    this.id=(await getDoc(doc(arRef,"id"))).get("next_id");
    
    
     await setDoc(doc(arRef,"id"),{
      next_id:(Number(this.id)+1).toString()
    });
  console.log(this.id);
  const storage = getStorage(this.app);
  const imagesRef = ref(storage, 'articles/images');
  const spaceRef = ref(storage, 'images/'+this.id.toString()+'.jpg');
  const image_link = 'articles/images/'+this.id.toString()+'.jpg';
 // const db = getFirestore(this.app);
 //  const arRef = collection(db, "articeles");
    
    await setDoc(doc(arRef, this.arTitel), {
      id:this.id,title:this.arTitel,subject:this.arSub,text:this.arText,image:image_link
    });
    uploadBytes(ref(storage, image_link),this.arPhtoto).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    })
    this.arTitel = '';
    this.arSub='';
    this.arText="";
  }
   
}
