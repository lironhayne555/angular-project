import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

 user: User = this.api.getUserInfo() as User

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService,
  ) {}



  loggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
  logout() {
  this.api.deleteToken();
  this.router.navigate(['login']);
  }

}
