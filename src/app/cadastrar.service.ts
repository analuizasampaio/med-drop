import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tipo } from './types/tipo';

@Injectable({
  providedIn: 'root',
})
export class CadastrarService {
  constructor(private http: HttpClient) { }

  private readonly apiURL = 'http://localhost:8080';

  cadastrar(tipo: Tipo, body: object): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/${tipo}/v1/cadastrar`, body);
  }
}
