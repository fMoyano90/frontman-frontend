import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../models/propiedad';
import { PropiedadService } from '../../services/propiedad.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../services/global';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: [],
  providers: [PropiedadService]

})
export class VentasComponent implements OnInit {

  public propiedad: Propiedad;
  public propiedades: any;
  public url: string;
  public token;
  public identity;

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
    private _userService: UserService,
    private _propiedadService: PropiedadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

    this.url = global.url;
    this.identity =  this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getPropiedadesPorCategoria();
  }

  getPropiedadesPorCategoria() {
    // Sacar el id del post de la url 
    this._route.params.subscribe( params => {
      let id = +params['id'];

      // Petición ajax para sacar los datos de la propiedad
      this._propiedadService.getPropiedadesByCategory(id).subscribe(
        response => {
          if (response.status == 'success'){
            this.propiedades = response.propiedades;
            console.log(response);
          } else {
            this._router.navigate(['/inicio']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/inicio']);
        }
      );
    });

  }

  deletePropiedad(id) {
    this._propiedadService.delete(this.token, id).subscribe(
      response => {
        this.getPropiedadesPorCategoria();
      },
      error => {
        console.log(error);
      }
    );
  }

}
