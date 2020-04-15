import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BusquedaService } from "../../../services/busqueda.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Busqueda } from "../../../models/busqueda";
import { Propiedad } from "../../../models/propiedad";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styles: [],
})
export class SideBarComponent implements OnInit {
  public busqueda: Busqueda;
  public respuesta;
  public status;

  public resultados: any;

  @Output() resultadoEvent = new EventEmitter<any>();

  constructor(
    private _busquedaService: BusquedaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.busqueda = new Busqueda("", "", "", "");
  }
}
