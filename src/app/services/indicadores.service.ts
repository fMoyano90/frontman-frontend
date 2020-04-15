import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  public url;
  constructor(
    private _http: HttpClient
  ) {
    this.url = 'https://mindicador.cl/api';
   }

  getIndicadores(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url, {headers: headers});

  }

}
