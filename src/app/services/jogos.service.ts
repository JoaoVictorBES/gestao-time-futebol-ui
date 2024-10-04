import { inject, Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/jogos";

  constructor() { }

  create(jogo: Jogo): Observable<Jogo>{

    return this.http.post<Jogo>(this.API + "/create", jogo, { responseType: 'text' as 'json'});

  }

  list(): Observable<Jogo[]>{

    return this.http.get<Jogo[]>(this.API + "/list/");

  }

  delete(id: number): Observable<void>{

    return this.http.delete<void>(this.API + "/delete");

  }

  update(id: number, jogo: Jogo): Observable<Jogo> {

    return this.http.put<Jogo>(this.API + "/update/{id}", jogo);

  }
}
