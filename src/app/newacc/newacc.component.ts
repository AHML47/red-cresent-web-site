import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newacc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './newacc.component.html',
  styleUrls: ['./newacc.component.css']
})
export class NewaccComponent {
  user = {
    nom: '',
    mdp: '',
    mdp1: '',
    prenom: '',
    occupation: '',
    age: null,
    niveauEtude: '',
    email: '',
    telephone: '',
    gouvernorat: '',
    ville: '',
    certificat: ''
  };
  
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

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Fichier sélectionné :', file);
      // Vous pouvez stocker le fichier si nécessaire
    }
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit() {
    console.log('Formulaire soumis:', this.user);
    // Ici, vous pouvez ajouter la logique pour traiter les données du formulaire
  }

  // Méthode pour afficher/masquer le champ de téléchargement du certificat
  toggleCertificateUpload(show: boolean) {
    this.showUpload = show;
  }
}


