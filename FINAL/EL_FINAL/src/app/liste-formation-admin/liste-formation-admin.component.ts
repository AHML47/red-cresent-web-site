import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from "../environments/environment";
import * as firebase from 'firebase/app';
import { getFirestore, collection, CollectionReference, getDocs, doc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-formation-admin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './liste-formation-admin.component.html',
  styleUrl: './liste-formation-admin.component.css'
})
export class ListeFormationAdminComponent implements OnInit {
  formations: Formation[] = [];
  db = getFirestore(firebase.initializeApp(firebaseConfig));
  app = initializeApp(firebaseConfig);

  ngOnInit() {
    this.getFormations();
  }

  async getFormations() {
    const colRef: CollectionReference = collection(this.db, "formation");
    const snapshot = await getDocs(colRef);
    this.formations = snapshot.docs.map(doc => ({ lid: doc.id, ...doc.data() as Formation }));
    console.log(this.formations);
  }

  async HideFormation(title: string) {
    console.log(title);
    const formation = this.formations.find(form => form.title === title);
    if (formation) {
      formation.hide = !formation.hide;
      const docRef = doc(this.db, "formation", title); 
      await updateDoc(docRef, { hide: formation.hide }); 
    }
  }

  getClass(title: string): string {
    const formation = this.formations.find(form => form.title === title);
    if (formation) {
      return formation.hide ? "a" : "b";
    }
    return "c";
  }
}

interface Formation {
  id: string;
  title: string;
  date: string;
  location: string;
  hide: boolean;
}
