import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import {firebaseConfig} from "../environments/environment";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  app = initializeApp(firebaseConfig);
  database = getFirestore(this.app);
  donColl = collection(this.database,"messages");


  showForm = false;
  id='';
  name = '';
  email = '';
  message = '';

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  async submitMessage() {
    console.log('Nom:',     this.name);
    console.log('Email:',   this.email);
    console.log('Message:', this.message);
    this.id = (await getDoc(doc(this.donColl,"next_id"))).get("id");
    console.log('id:',this.id );
    await setDoc(doc(this.donColl, this.id.toString()), {
      Nom:          this.name   ,
      Email:      this.email  ,
      Message:  this.message,});
      await setDoc(doc(this.donColl,"next_id"),{
        id:(Number(this.id)+1).toString()
      });

    this.closeForm();
  
  }

}
 