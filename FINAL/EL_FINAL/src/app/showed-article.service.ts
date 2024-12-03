import { Injectable } from '@angular/core';
//import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ShowedArticleService {
  titel="";
  subject="";
  text="";
  img="";
  public set_titel(x:string){this.titel=x; }
  public set_subject(x:string){this.subject=x; }
  public set_text(x:string){this.text=x; }
  public set_img(x:string){this.img=x;}


  public get_titel(){return this.titel;}
  public get_subject(){return this.subject;}
  public get_text(){return this.text;}
  public get_img(){return this.img;}
  


  constructor() { }
}
