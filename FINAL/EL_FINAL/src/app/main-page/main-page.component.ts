import { Component, OnInit } from "@angular/core";
//import firebase from              "firebase/app"; // (1)
import {firebaseConfig} from "../environments/environment";
import * as fb from 'firebase/firestore';
import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc } from "firebase/firestore";
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { title } from "process";
import { ShowArticleComponent } from     "../show-article/show-article.component";
import { AddArticleComponent } from      "../add-article/add-article.component";
import { PhAddComponent } from           "../ph-add/ph-add.component";
import { PhShowComponent } from          "../ph-show/ph-show.component";
import { DonArgentComponent } from       "../don-argent/don-argent.component";
import { DonComponent } from             "../don/don.component";
import { LoginComponent } from           "../login/login.component";
import { NewaccComponent } from          "../newacc/newacc.component";
import { HeaderComponent } from          "../header/header.component";
import { ShowUserComponent } from        "../show-user/show-user.component";
import { ResetpassComponent } from       "../resetpass/resetpass.component";
import { GetCardComponent } from         "../get-card/get-card.component";
import { IconArticleComponent } from     "../icon-article/icon-article.component";
import { ArtListComponent } from         "../art-list/art-list.component";
import { DonListMonComponent } from      "../don-list-mon/don-list-mon.component"; 
import { DonListPhyComponent } from      "../don-list-phy/don-list-phy.component";
import { AdminControlComponent } from    "../admin-control/admin-control.component";
import { AboutUsComponent } from "../about-us/about-us.component"; 
import { ElementsComponent } from "../elements/elements.component";
import { FormationComponent } from "../formation/formation.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, AdminControlComponent, DonListPhyComponent, ShowUserComponent, AddArticleComponent, ShowArticleComponent, PhAddComponent, PhShowComponent, DonArgentComponent, DonComponent, LoginComponent, NewaccComponent, HeaderComponent, ResetpassComponent, GetCardComponent, IconArticleComponent, ArtListComponent, DonListMonComponent, AboutUsComponent,ElementsComponent,FormationComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
