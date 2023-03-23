import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from './types/tipo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private readonly apiURL = 'http://localhost:8080';

  login(tipo: Tipo, body: object): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/${tipo}/v1/login`, body);
  }
}
