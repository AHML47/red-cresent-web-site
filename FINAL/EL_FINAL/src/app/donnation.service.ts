import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth.service';
import {firebaseConfig} from "./environments/environment";
import { getFirestore,collection,CollectionReference,getDocs, doc, setDoc,getDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class DonnationService {

  constructor(private authService: AuthService) { }
  public async getUserFirstName() : Promise<string>{
    if(this.authService.getUserId()){
    const  app = initializeApp(firebaseConfig);
    const  database = getFirestore(app);
    const  donColl = collection(database,"useres");
    const a =await getDoc(doc(donColl,this.authService.getUserId()));
    return a.get("first_name").toString();
    }else{
      return "no user"
    }
  }
  public async getUserLastName() {
    if(this.authService.getUserId()){
    const  app = initializeApp(firebaseConfig);
    const  database = getFirestore(app);
    const  donColl = collection(database,"useres");
    const a =await getDoc(doc(donColl,this.authService.getUserId()));
    return a.get("last_name").toString();
    }else{
      return "no user"
    }
  }
  public async getUserId(){
    if(this.authService.getUserId()){
      return this.authService.getUserId();
    }else{
      return "no user";
    }
  }
}
