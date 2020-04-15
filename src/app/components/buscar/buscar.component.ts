import { Component, OnInit } from "@angular/core";
import { BusquedaService } from "../../services/busqueda.service";
import { Router, ActivatedRoute } from "@angular/router";
import { global } from "../../services/global";
import { Propiedad } from "src/app/models/propiedad";
import { PropiedadService } from "src/app/services/propiedad.service";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styles: [],
})
export class BuscarComponent implements OnInit {
  public resultados: any;
  public url;
  public propiedades: Array<Propiedad>;
  public identity;
  public token;

  public labels: any = {
    previousLabel: "Anterior",
    nextLabel: "Siguiente",
    screenReaderPaginationLabel: "Paginacion",
    screenReaderPageLabel: "pagina",
    screenReaderCurrentLabel: `You're on page`,
  };

  p: number = 1;
  collection: any[];
  router: any;

  constructor(
    private _route: ActivatedRoute,
    private _busquedaService: BusquedaService,
    private _propiedadService: PropiedadService,
    private _userService: UserService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.obtenerBusqueda();
  }

  recibeResultados($event) {
    this.resultados = $event;
    console.log(this.resultados);
  }

  obtenerBusqueda() {
    this._route.params.subscribe((busqueda) => {
      this._busquedaService.getBusqueda(busqueda).subscribe((resp) => {
        console.log(resp);
        this.propiedades = resp.propiedades;
      });
    });
  }

  deletePropiedad(id) {
    this._propiedadService.delete(this.token, id).subscribe(
      (response) => {
        Swal.fire({
          icon: "success",
          title: "Operación exitosa",
          text: "La propiedad se ha sido eliminada.",
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
