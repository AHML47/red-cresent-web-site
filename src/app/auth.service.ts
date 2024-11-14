import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth(initializeApp(firebaseConfig));
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable(); // Observable for user state

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user); // Emit user state changes
    });
  }

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.userSubject.next(userCredential.user); // Update user state
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  logout() {
    this.auth.signOut();
    this.userSubject.next(null); // Clear user data on logout
  }

  getUserId() {
    return this.userSubject.value?.uid; // Get the current user ID
  }
}
