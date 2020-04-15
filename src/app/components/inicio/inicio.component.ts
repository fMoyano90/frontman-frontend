import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../models/propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [],
  providers: [PropiedadService, UserService]
})
export class InicioComponent implements OnInit {

  public url;
  public propiedades: Array<Propiedad>;
  public identity;
  public token;

  public labels: any = {
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    screenReaderPaginationLabel: 'Paginacion',
    screenReaderPageLabel: 'pagina',
    screenReaderCurrentLabel: `You're on page`
  };

  p: number = 1;
  collection: any[];
  router: any;

  constructor(
    private _propiedadService: PropiedadService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity =  this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getPropiedades();
  }

  getPropiedades() {
    this._propiedadService.getPropiedades().subscribe(
      response => {
        if (response.status === 'success') {
          this.propiedades = response.propiedades;

          console.log(this.propiedades);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePropiedad(id) {
    this._propiedadService.delete(this.token, id).subscribe(
      response => {
        this.getPropiedades();
      },
      error => {
        console.log(error);
      }
    );
  }

}
