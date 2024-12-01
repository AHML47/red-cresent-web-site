import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  addData(collectionName: string, data: any) {
    return this.firestore.collection(collectionName).add(data);
  }
}
