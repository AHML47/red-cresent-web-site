import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [RouterModule ,RouterLink ],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.css'
})
export class ElementsComponent {

}
