import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonArgentComponent } from './don-argent/don-argent.component';
import { GetCardComponent } from './get-card/get-card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { NewmemberComponent } from './newmember/newmember.component';
import { ElementsComponent } from './elements/elements.component';
import { DonComponent } from './don/don.component';
import { FormationComponent } from './formation/formation.component';
import { ArtBigListComponent } from './art-big-list/art-big-list.component';
import { NewaccComponent } from './newacc/newacc.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'donArgent',component:DonArgentComponent},
    {path:'getCard',component:GetCardComponent},
    {path: 'main',component:MainPageComponent },
    {path: '',component:MainPageComponent },
    {path: 'adminCont',component:AdminControlComponent},
    {path: 'showArt',component:ShowArticleComponent},
    {path: 'newmember',component:NewmemberComponent},
    {path: 'artList',component:ArtBigListComponent},
    { path: 'elements', component: ElementsComponent },
  { path: 'don', component: DonComponent },
  { path: 'formation', component: FormationComponent },
    
];
