import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { Contacto } from '../models/contacto';

@Injectable()
export class CorreoService {

    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = global.url;
    }

    contactanos(token, contacto: Contacto): Observable<any> {
        let json = JSON.stringify(contacto);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization',  localStorage.getItem('token') || '');

        return this._http.post(this.url + 'contacto', params, {headers: headers});
    }
    confianos(token, form): Observable<any> {
        let json = JSON.stringify(form);
        let params = 'json=' + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                       .set('Authorization',  localStorage.getItem('token') || '');

        return this._http.post(this.url + 'confiar-propiedad', params, {headers: headers});
    }
}
