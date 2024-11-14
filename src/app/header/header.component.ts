import { Component , OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonArgentComponent } from '../don-argent/don-argent.component';
import { LoginComponent } from '../login/login.component';
import { ShowUserComponent } from '../show-user/show-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewaccComponent } from '../newacc/newacc.component';
import { ResetpassComponent } from '../resetpass/resetpass.component';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports:[MatDialogModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  LoginIsOpen = false;
  DonationIsOpen = false;
  isLogin:boolean=true;
  constructor(private matDialog: MatDialog,private authService: AuthService) { }
  


  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.isLogin = !!user; // Update based on user presence
    });
  }




  openLogin() {
    let dialogLogin= this.matDialog.open(LoginComponent);
    dialogLogin.afterClosed().subscribe(data => {
      if(data == "open sighn in"){
        this.openSingUp()
      } else if(data == "open resend pass"){
        this.openReInitPass()
      } else {
        this.isLogin=data;
      }
      
    })
  }

  openDon() {
    this.matDialog.open(DonArgentComponent, {
      // speciq desine 
    });

  }
  openUser() {
    const openUser= this.matDialog.open(ShowUserComponent);
    openUser.afterClosed().subscribe(data => {
      if(data =="sLogin" ){
        this.isLogin =true ;
      }
      else if (data =="logout"){this.isLogin =false ;}
      console.log(this.isLogin);
    })

  }
  openSingUp(){
   const modalSin =  this.matDialog.open(NewaccComponent);
   modalSin.afterClosed().subscribe(data => {

    if(data=="sebon login"){this.isLogin =true ;}
   })
  }
   openReInitPass(){
    const modalReInit =  this.matDialog.open(ResetpassComponent);
   }
  
}
