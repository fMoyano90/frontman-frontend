import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
      this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit() {
    // Se ejecuta siempre y cierra sesión cuando le llega el parametro sure por la url
    this.logout();
  }

  onSubmit(form){
    this._userService.signup(this.user).subscribe(
      response => {
        // TOKEN
        if (response.status !== 'error') {
          this.status = 'success';
          this.token = response;

          // USUARIO IDENTIFICADO
          this._userService.signup(this.user, true).subscribe(
            response => {
                this.identity = response;

                // PERSISTIR DATOS USUARIO IDENTIFICADO
                console.log(this.token);
                console.log(this.identity);

                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));

                // Redirección a inicio

                this._router.navigate(['home']);
            },
            error => {
              this.status = 'error';
              console.log(<any>error);
            }
          );

        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  logout() {
    this._route.params.subscribe(params =>{
      let logout = +params['sure'];

      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        // Redirección a home
        this._router.navigate(['home']);

      }
    });
  }

}
