import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getStorage , ref , getDownloadURL} from "firebase/storage";
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ph-show',
  standalone: true,
  imports: [],
  templateUrl: './ph-show.component.html',
  styleUrl: './ph-show.component.css'
})
export class PhShowComponent   {
  /*ngOnInit(): void {
    
  }*/
  // Create a reference with an initial file path and name
  app = initializeApp(firebaseConfig);
  storage = getStorage(this.app);
a= getDownloadURL(ref(this.storage, '/Articels/art2/test'))
  .then((url) => {
     const img = document.getElementById('myimg');
     img?.setAttribute('src', url);
    
  });
  
 
 
  
 

}
/*function ngOnInit() {
  getDownloadURL(ref(this.storage, 'images/stars.jpg'))
  .then((url) => {
    
  })
}*/

