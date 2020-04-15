import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
  providers: [ UserService ]
})
export class RegistroComponent implements OnInit {
  public user: User;
  public status: string;

  constructor(
    private _userService: UserService
  ) {
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._userService.register(this.user).subscribe(
      response =>{
        if(response.status == 'success'){
          this.status =  response.status;
          form.reset();
        }else{
          this.status = 'error';
        }

      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

}
