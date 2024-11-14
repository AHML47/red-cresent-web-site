import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import { DonArgentComponent } from './don-argent/don-argent.component';
import { NewaccComponent } from './newacc/newacc.component';
import { DonComponent } from './don/don.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewaccComponent,LoginComponent,FormsModule,DonArgentComponent,DonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'red_crescent';
}


