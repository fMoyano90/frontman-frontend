import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { global } from '../../../services/global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [UserService]
})
export class NavbarComponent implements OnInit, DoCheck{
  public identity;
  public token;
  public url;

  constructor(
    private router:Router,
    public _userService: UserService) { 
      this.loadUser();
      this.url = global.url;
    }

  ngOnInit() {
  }

  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.identity =  this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
