import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-don',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl : './don.component.html' ,
  styleUrls: ['./don.component.css'] 
})
export class DonComponent {
  user = {
    gouvernorat: '',
    ville: '',
    adresse: '',
    telephone: '',
    type: ''
  };

  governorates = [
    "Ariana", "Béja", "Ben Arous", "Bizerte", "Gabès",
    "Gafsa", "Jendouba", "Kairouan", "Kasserine", 
    "Kébili", "Mahdia", "Manouba", "Medenine", 
    "Monastir", "Nabeul", "Sfax", "Sidi Bouzid", 
    "Siliana", "Tataouine", "Tozeur", "Tunis", "Zaghouan"
  ];

  cities: string[] = [];
  showMessage = false; 

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

  onSubmit() {
    this.showMessage = true; 
  }
}
