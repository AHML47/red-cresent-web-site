import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './environments/environment';
import { BehaviorSubject } from 'rxjs';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
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
  u : users [] =[];
  is=false;
  async isAdmin(){
    
    if(this.getUserId()){
   const app=initializeApp(firebaseConfig);
   const db = getFirestore(app);
   const collectionRef = collection(db, "admins");
   const a = await getDocs(collectionRef) ;
   this.u = a.docs.map(doc => ({ lid: doc.id, ...doc.data() as users}));
   this.u.forEach(e => {
    if(e.id==this.getUserId()){
      this.is=true;
    }
   });
   ;
  }
  return this.is;
  }
}
interface users {
  id:string;
    admin:string;         // Represents the unique ID, e.g., "27"
// Represents the user's first name, e.g., "ahmed"
}