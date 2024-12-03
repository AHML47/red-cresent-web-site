import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {firebaseConfig} from "../environments/environment";
//import * as fb from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc ,getDoc} from "firebase/firestore";
//import { isPlatformBrowser } from '@angular/common';
//import {  Inject, PLATFORM_ID } from '@angular/core';
import { getStorage , ref , uploadBytes} from "firebase/storage";
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addformation',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addformation.component.html',
  styleUrl: './addformation.component.css'
})
export class ADDFormationComponent {
  titre="";
  date="";
  local="";
  id="";

  async get_id(){
    const db = getFirestore(this.app);
    const app = initializeApp(firebaseConfig);
    const arRef = collection(db, "formation");
    this.id=(await getDoc(doc(arRef,"id"))).get("next_id");
    
    
     await setDoc(doc(arRef,"id"),{
      next_id:(Number(this.id)+1).toString()
    });
    }



  app = initializeApp(firebaseConfig);

 async addforma(){
  const db = getFirestore(this.app);
    const app = initializeApp(firebaseConfig);
    const arRef = collection(db, "formation");
    await this.get_id();
    await setDoc(doc(arRef, this.titre), {
      id:this.id,title:this.titre,date:this.date,location:this.local,hide:true
    });
    this.titre="";
    this.date="";
    this.local="";

  }

}
