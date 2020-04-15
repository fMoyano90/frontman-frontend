import { Component, OnInit } from '@angular/core';
import { IndicadoresService } from '../../../services/indicadores.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  
  public indicadores: any;

  constructor(
    private _indicadoresService: IndicadoresService
  ) {
  }

  ngOnInit() {
    this.obtenerIndicadores();
  }

  obtenerIndicadores() {
    this._indicadoresService.getIndicadores().subscribe(
      response => {
        if (response) {
          this.indicadores = response;
          console.log(this.indicadores);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
