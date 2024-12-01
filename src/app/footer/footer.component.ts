import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  showForm = false;
  name = '';
  email = '';
  message = '';

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  submitMessage() {
    console.log('Nom:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    this.closeForm();
  
  }

}
 