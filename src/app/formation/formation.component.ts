import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  formations = [
    {
      title: 'Formation Secourisme de Base',
      date: '15 Janvier 2024',
      location: 'Tunis, Tunisie'
    },
    {
      title: 'Formation Avancée en Premiers Secours',
      date: '20 Février 2024',
      location: 'Sousse, Tunisie'
    },
    {
      title: 'Formation de Secouristes Volontaires',
      date: '10 Mars 2024',
      location: 'Monastir, Tunisie'
    },
    {
      title: 'Formation en Gestion des Urgences',
      date: '5 Avril 2024',
      location: 'Bizerte, Tunisie'
    },
    {
      title: 'Formation de Secourisme pour Enfants',
      date: '1 Mai 2024',
      location: 'Sfax, Tunisie'
    }
  ];

}
