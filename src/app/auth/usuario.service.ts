import { inject, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  http = inject(HttpClient);
  API = "http://localhost:8080/api/user";

  constructor() { }

  create(usuario: Usuario): Observable<Usuario>{

    return this.http.post<Usuario>(`${this.API}/cadastro`, usuario);

  }

}
