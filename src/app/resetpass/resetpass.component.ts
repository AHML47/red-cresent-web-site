import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {firebaseConfig} from "../environments/environment";
//import { getAuth, sendEmailVerification } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { FirebaseError } from 'firebase/app';
import { MatDialogRef } from '@angular/material/dialog';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
@Component({
  selector: 'app-resetpass',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './resetpass.component.html',
  styleUrl: './resetpass.component.css'
})
export class ResetpassComponent {
  constructor (public dialogRef: MatDialogRef<ResetpassComponent>){}
  email='';
  error=false;
  closeModal(x:boolean): void {
    this.dialogRef.close(x);
    }
  resetEmailSent = false;
  resetError: string | null = null;
  auth = getAuth(initializeApp(firebaseConfig));
  async sendMail(){
    this.error=false;
    console.log(this.email)
    this.resetEmailSent = false;
    this.resetError = null;

    try {
      await sendPasswordResetEmail(this.auth, this.email);
      this.resetEmailSent = true;
    } catch (error) {
      this.error=true;
      this.resetError = (error as FirebaseError).code === 'auth/user-not-found'
        ? 'No account with this email address was found.'
        : 'Error sending reset email. Please try again.';
      console.error('Reset password error:', error);
    }
    if(!this.error){this.closeModal(true);}
  }
  }


