import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propiedad } from '../models/propiedad';
import { global } from './global';

@Injectable()
export class PropiedadService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    pruebas() {
        return 'Hola mundo desde el servicio de entradas!';
    }

    create(token, propiedad): Observable<any>{
        // Limpiar el campo content de htmlEntities a UTF 8
        propiedad.content = global.htmlEntities(propiedad.content);

        let json = JSON.stringify(propiedad);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.post(this.url + 'propiedad', params, {headers:headers});

    }

    getPropiedades(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'propiedad', {headers: headers});

    }

    getPropiedad(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'propiedad/' + id, {headers: headers});
    }

    update(token, propiedad, id): Observable<any>{
        // Limpiar el campo content de htmlEntities a UTF 8
        propiedad.content = global.htmlEntities(propiedad.content);

        let json = JSON.stringify(propiedad);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.put(this.url + 'propiedad/' + id, params, {headers: headers});
    }

    delete(token, id){
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization', token);

        return this._http.delete(this.url + 'propiedad/' + id, {headers: headers});
    }

    getPropiedadesByCategory(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.get(this.url + 'propiedad/category/' + id, {headers: headers});
    }

}