import { Component } from '@angular/core';
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import { MatDialogRef , MatDialog } from '@angular/material/dialog';
import { MonyDonService } from '../mony-don.service';
import { GetCardComponent } from '../get-card/get-card.component';

@Component({
  selector: 'app-don-argent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './don-argent.component.html',
  styleUrl: './don-argent.component.css'
})
export class DonArgentComponent {
  
  montant="";
  id=""
  app = initializeApp(firebaseConfig);
  database = getFirestore(this.app);
  donColl = collection(this.database,"donetions");
  ;
  constructor(public sendSer: MonyDonService,public dialogRef: MatDialogRef<DonArgentComponent>,private matDialog: MatDialog) {}
  closeModal(): void {
    this.dialogRef.close();
    }
  setMontant(value: string) {
    this.montant = value;
  }
// win psplt a5er marra : l id tkoun document fe wast l collection w fel fieled el id jaya kol type article /donnation 3endo l id document mta3o 
  sendMony(){
    this.sendSer.setMonatn(this.montant);
    this.matDialog.open(GetCardComponent);
    this.dialogRef.close();
  }
}
