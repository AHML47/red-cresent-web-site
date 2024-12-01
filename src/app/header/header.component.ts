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
import { GetCardComponent } from '../get-card/get-card.component';
import { RouterLink } from '@angular/router';
import { SideNavComponent } from "../side-nav/side-nav.component";
import { DonComponent } from '../don/don.component';
//import { DonHolderComponent } from '../don-holder/don-holder.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDialogModule, CommonModule, SideNavComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSidebarVisible = false;
  isLogin: boolean = false;

  constructor(private matDialog: MatDialog, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.isLogin = !!user;
    });
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  openLogin(): void {
    const dialogLogin = this.matDialog.open(LoginComponent);
    dialogLogin.afterClosed().subscribe(data => {
      if (data === "login successful") {
        this.isLogin = true;
      }
    });
  }

  openDon(): void {
    this.matDialog.open(DonComponent);
  }

  openUser(): void {
    const dialogUser = this.matDialog.open(NewaccComponent);
    dialogUser.afterClosed().subscribe(data => {
      if (data === "logout") {
        this.isLogin = false;
      }
    });
  }

  openSingUp(): void {
    this.matDialog.open(LoginComponent);
  }
  
}
