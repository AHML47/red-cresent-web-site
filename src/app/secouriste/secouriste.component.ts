import { Component, NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-secouriste',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './secouriste.component.html',
  styleUrl: './secouriste.component.css'
})
export class SecouristeComponent {
  participant = {
    name: '',
    email: '',
    phone: '',
    formation: ''
  };

  formations = [
    '1/12/2024 - Sahloul, Sousse, Tunisie',
    '03/01/2025 - Beni Khalled, Nabeul, Tunisie',
    '15/02/2025 - Mahdia, Tunisie'
  ];

  submitForm() {
    console.log('Formulaire soumis :', this.participant);
    // Ajouter une logique ici (ex. envoi vers une API ou affichage d’un message)
  }

}
