import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { global } from "./global";

@Injectable({
  providedIn: "root",
})
export class BusquedaService {
  public url;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  getBusqueda(busqueda): Observable<any> {
    let json = JSON.stringify(busqueda);
    let params = "json=" + json;
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );

    return this._http.post(this.url + "buscar", params, { headers });
  }
}
