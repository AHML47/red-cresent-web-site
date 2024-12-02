import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {
  app = initializeApp(firebaseConfig);
  database = getFirestore(this.app);
  donColl = collection(this.database,"messages");
  message : message[] = [] ;
  
  ngOnInit() {
    this.getAllmess();
  }

  async getAllmess(){
    const a = await getDocs(this.donColl) ;
    this.message = a.docs.map(doc => ({ lid: doc.id, ...doc.data() as message}))
     console.log(this.message);
   }
}
interface message {
  id:string;
  Nom :string;
  
  Email :string;
  Message :string;
}
