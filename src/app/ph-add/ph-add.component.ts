import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getStorage , ref , uploadBytes} from "firebase/storage";
import {firebaseConfig} from "../environments/environment";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ph-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ph-add.component.html',
  styleUrl: './ph-add.component.css'
})

export class PhAddComponent {
   file : any;
    Aname="";
    Fname="";
   app = initializeApp(firebaseConfig);
   storage = getStorage(this.app);
   imagesRef = ref(this.storage, 'articles/images');
   spaceRef = ref(this.storage, 'images/space.jpg');

  onFileChange(event: Event)  {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
       this.file = input.files[0];
      
      // Vous pouvez stocker le fichier si nécessaire
    }

  }

  
  
  push_photo(){
    uploadBytes(ref(this.storage, '/Articels/'+this.Aname+'/'+this.Fname),this.file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    })
    
  }

  
  
  
}
