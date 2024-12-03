import { Component } from '@angular/core';
import { DonListMonComponent } from '../don-list-mon/don-list-mon.component';
import { DonListPhyComponent } from '../don-list-phy/don-list-phy.component';
import { AddArticleComponent } from '../add-article/add-article.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MainPageComponent } from '../main-page/main-page.component';
import { RouterLink } from '@angular/router';
import { ListMessageComponent } from '../list-message/list-message.component';
import { ADDFormationComponent } from '../addformation/addformation.component';
import { ListeArticleAdminComponent } from '../liste-article-admin/liste-article-admin.component';
import { ListeFormationAdminComponent } from "../liste-formation-admin/liste-formation-admin.component";
@Component({
  selector: 'app-admin-control',
  standalone: true,
  imports: [RouterLink, ListeArticleAdminComponent, ADDFormationComponent, ListMessageComponent, DonListMonComponent, DonListPhyComponent, AddArticleComponent, ListeFormationAdminComponent],
  templateUrl: './admin-control.component.html',
  styleUrl: './admin-control.component.css'
})
export class AdminControlComponent {
//constructor (private appwin:MatDialogRef<AdminControlComponent>){}

}
