import { Component } from '@angular/core';
import { DonListMonComponent } from '../don-list-mon/don-list-mon.component';
import { DonListPhyComponent } from '../don-list-phy/don-list-phy.component';
import { AddArticleComponent } from '../add-article/add-article.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MainPageComponent } from '../main-page/main-page.component';
import { RouterLink } from '@angular/router';
import { ListMessageComponent } from '../list-message/list-message.component';
@Component({
  selector: 'app-admin-control',
  standalone: true,
  imports: [RouterLink,ListMessageComponent,DonListMonComponent,DonListPhyComponent,AddArticleComponent],
  templateUrl: './admin-control.component.html',
  styleUrl: './admin-control.component.css'
})
export class AdminControlComponent {
//constructor (private appwin:MatDialogRef<AdminControlComponent>){}

}
