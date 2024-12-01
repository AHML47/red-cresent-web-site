import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,fetchSignInMethodsForEmail } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import {firebaseConfig} from "../environments/environment";
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage , ref , uploadBytes} from "firebase/storage";
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService} from '../auth.service';
import { FirebaseError } from 'firebase/app';


@Component({ 
  selector: 'app-newacc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './newmember.component.html',
  styleUrls: ['./newmember.component.css']
})
export class NewmemberComponent {
  constructor (public dialogRef: MatDialogRef<NewmemberComponent>,private authService: AuthService){};
  
  user = {
    id: '',
    nom: '',
    prenom: '',
    occupation: '',
    age: null,
    niveauEtude: '',
    email: '',
    telephone: '',
    gouvernorat: '',
    ville: '',
    certificat:'',
    password: ''
  };
  app = initializeApp(firebaseConfig);
  storage = getStorage(this.app);
  file:any;

// Initialize Firebase Authentication and get a reference to the service
 auth = getAuth(this.app);

  governorates = [
    "Ariana", "Béja", "Ben Arous", "Bizerte", "Gabès",
    "Gafsa", "Jendouba", "Kairouan", "Kasserine", 
    "Kébili", "Mahdia", "Manouba", "Medenine", 
    "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", 
    "Siliana", "Tataouine", "Tozeur", "Tunis", "Zaghouan"
  ];
  
  cities: string[] = [];
  showUpload = false;

  updateCities() {
    interface CityMap {
      [key: string]: string[];
    }
    const cityMap: CityMap = {
      "Ariana": ["Ariana", "Raoued", "Ettadhamen"],
      "Béja": ["Béja", "Nefza", "Testour"],
      "Ben Arous": ["Ben Arous", "Mahares", "Mornag"],
      "Bizerte": ["Bizerte", "Menzel Bourguiba", "Tinja"],
      "Gabès": ["Gabès", "Mareth", "Menzel"],
      "Gafsa": ["Gafsa", "Metlaoui", "Redeyef"],
      "Jendouba": ["Jendouba", "Bousalem", "Oued Meliz"],
      "Kairouan": ["Kairouan", "El Alia", "Haffouz"],
      "Kasserine": ["Kasserine", "Thala", "Sbiba"],
      "Kébili": ["Kébili", "Douz", "Fougar"],
      "Mahdia": ["Mahdia", "Chebba", "Ksar es Souk"],
      "Manouba": ["Manouba", "Djedeida", "Tebourba"],
      "Medenine": ["Medenine", "Ben Guerdane", "Zarzis"],
      "Monastir": ["Monastir", "Ksar es Souk", "Bembla"],
      "Nabeul": ["Nabeul", "Hammamet", "Kalaa Kebira", "Beni Khalled"],
      "Sfax": ["Sfax", "Skhira", "Mahrès"],
      "Sidi Bouzid": ["Sidi Bouzid", "Meknassi", "Ouled Haffouz"],
      "Siliana": ["Siliana", "Kasserine", "Bargou"],
      "Tataouine": ["Tataouine", "Ghomrassen", "Bir Lahmar"],
      "Tozeur": ["Tozeur", "Nefta", "Chébika"],
      "Tunis": ["Tunis", "La Marsa", "Carthage"],
      "Zaghouan": ["Zaghouan", "Zaghouan", "Saouaf"]
    };

    this.cities = cityMap[this.user.gouvernorat] || [];
  }
  emailEx:boolean = false;
  emailInvalid:boolean = false;
  isup=false;
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.isup=true;
      console.log('Fichier sélectionné :', this.file);
      // Vous pouvez stocker le fichier si nécessaire
    }
  }
  image_link="";
  // Méthode pour gérer la soumission du formulaire
  /*async checkEmailExists(email: string): Promise<boolean> {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(this.auth, email);
     console.log("use of email : "+signInMethods);
      return signInMethods.length > 0; // If array is not empty, email is in use
    } catch (err) {
      const error = err as FirebaseError;
      console.log(error);
      if (error.code === 'auth/email-already-exists'){
        this.emailEx=true;
        console.log(error);
      }
      console.error("Error checking email:", error);
      throw error;
    }
  }*/
  async createAcc() {
    const auth = getAuth();
    //const emailExists = await this.checkEmailExists(this.user.email);
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, this.user.email, this.user.password);
      this.emailEx=false;
      this.emailInvalid=false;
      const id = userCredential.user.uid;
      console.log(id);
      this.image_link = (this.isup) ? 'users/images/certif/' + id.toString() + '.jpg' : 'no certificate';
      this.user.id = id.toString();
      this.user.certificat = this.image_link;
      console.log('Formulaire soumis:', this.user);
    } catch (err) {
      const error = err as FirebaseError;
      console.log(error);
      if (error.code === 'auth/email-already-in-use'){
        this.emailEx=true;
        console.log(error);
      }else if
      (error.code === 'auth/invalid-email'){
        this.emailInvalid=true;
        console.log(error);
      } 
      console.error("Error checking email:", error);
      throw error;   
    }
    this.login();
    this.dialogRef.close("sebon login");
  }
  async login(){
    try {
      await this.authService.login(this.user.email, this.user.password);
      
    } catch (error) {
      //this.closeModal(false);
      console.error('Login failed:', error);
    }
  }
  async uppAcc() {
    const arRef = collection(getFirestore(this.app), "useres");
    try {
      await setDoc(doc(arRef, this.user.id.toString()), {
        first_name: this.user.nom,
        last_name: this.user.prenom,
        age: this.user.age,
        occupation: this.user.occupation,
        phon_num: this.user.telephone,
        email: this.user.email,
        gouvernorat: this.user.gouvernorat,
        ville: this.user.ville,
        niveau_etude: this.user.niveauEtude,
        certificat: this.user.certificat,
        admin:false
      });
      console.log("User data uploaded successfully");
  
      if (this.isup) {
        await uploadBytes(ref(this.storage, this.image_link), this.file);
        console.log('Certificate uploaded successfully');
      }
    } catch (error) {
      console.error("Error uploading user data:", error);
    }
  }
  
  async onSubmit() {
    await this.createAcc(); // Wait until createAcc is fully done
    if(!this.emailEx){await this.uppAcc();}
        // Now call uppAcc after createAcc
  }
  

  // Méthode pour afficher/masquer le champ de téléchargement du certificat
  toggleCertificateUpload(show: boolean) {
    this.showUpload = show;
  }
  

}


