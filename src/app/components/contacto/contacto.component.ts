import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CorreoService } from '../../services/correo.service';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global';
import { Contacto } from '../../models/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [],
  providers: [CorreoService, UserService]
})
export class ContactoComponent implements OnInit {

  public identity;
  public token;
  public status: string;
  public url;
  public contacto: Contacto;


  constructor(
    private _correoService: CorreoService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.identity =  this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.contacto = new Contacto('', '', '', '', '');
    this.url = global.url;
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._correoService.contactanos(this.token, this.contacto).subscribe(
      response => {
        if(response.status == 'success'){
          this.contacto = response.contacto;
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
