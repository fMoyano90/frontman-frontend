import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../../services/busqueda.service';
import { Router, ActivatedRoute } from '@angular/router';
import { global } from '../../services/global';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  public resultados: any;
  public url;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _busquedaService: BusquedaService
  ) {
    this.url = global.url;
   }

  ngOnInit() {
  }

  recibeResultados($event){
    this.resultados = $event;
    console.log(this.resultados);
  }



}
