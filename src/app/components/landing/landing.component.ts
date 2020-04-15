import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CorreoService } from '../../services/correo.service';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global';
import { Confianos } from '../../models/confianos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: [],
  providers: [CorreoService, UserService]
})
export class LandingComponent implements OnInit {
  public identity;
  public token;
  public status: string;
  public url;
  public confianos: Confianos;

  constructor(
    private _correoService: CorreoService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.identity =  this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.confianos = new Confianos('', '', '', '', '', '', 1, '', '', '');
    this.url = global.url;
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._correoService.confianos(this.token, this.confianos).subscribe(
      response => {
        if(response.status == 'success'){
          this.confianos = response.confianos;
          this.status = 'success';
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }

}
