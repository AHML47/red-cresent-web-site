import { Component } from '@angular/core';
import { getAuth,sendPasswordResetEmail, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
//import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public dialogRef: MatDialogRef<LoginComponent>,private router: Router,private authService: AuthService) {
    
  }
  resetEmailSent = false;
  resetError: string | null = null;
  error=false;
  app = initializeApp(firebaseConfig);
  auth = getAuth(this.app);
  user = {
    email: '',
    password: ''
  };
  loginError: string | null = null;
  closeModal(x:boolean): void {
    this.dialogRef.close(x);
    }
    
async on_sub(){
  this.loginError = null;
  this.error=false;
  //             thabet kana el login yog3ed 3la device wa7ed walla ilogini 3la device yalga ro7o mlogini 3al kol 
  try {
    await this.authService.login(this.user.email, this.user.password);
    //this.router.navigate(['/home']); // Navigate to another page after login
    //this.closeModal();
  } catch (err) {
    const error = err as FirebaseError;
    this.error=true;
    if (error.code === 'auth/user-not-found') {

      this.loginError = 'Email not recognized. Please check and try again.';
    } else if (error.code === 'auth/missing-password') {
      this.loginError = 'Incorrect password. Please try again.';
    } else if (error.code === 'auth/invalid-email') {
      this.loginError = 'Invalid email.';
    } else if(error.code === 'auth/invalid-credential'){
      this.loginError = 'wrong email or password';
    }
     else {
      this.loginError = 'Login failed. Please try again later.';
    }
    console.error('Login error:', error);
    //this.closeModal(false);
   // console.error('Login failed:', error);
  }
  if(!this.error){this.closeModal(true);}

}
resetPassword() {
  this.dialogRef.close("open resend pass");
}
openSinghn(){
  this.dialogRef.close("open sighn in");
}

}
