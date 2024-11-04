import { inject, Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/jogos";

  constructor() { }

  create(jogo: Jogo): Observable<Jogo>{

    return this.http.post<Jogo>(`${this.API}/create`, jogo, { responseType: 'text' as 'json'});

  }

  list(): Observable<Jogo[]>{

    return this.http.get<Jogo[]>(`${this.API}/list`);

  }

  lisJogadores(): Observable<any[]>{

    return this.http.get<any[]>(`${this.API}/lista/jogador`);

  }

  delete(id: number): Observable<void>{

    return this.http.delete<void>(`${this.API}/delete/${id}`);

  }

  update(id: number, jogo: Jogo): Observable<Jogo> {

    return this.http.put<Jogo>(`${this.API}/update/${id}`, jogo);

  }

  findById(id: number): Observable<Jogo> {
    return this.http.get<Jogo>(`${this.API}/${id}`);
  }

  adicionarEvento(jogoId: number, evento: any): Observable<any> {
    return this.http.post<any>(`${this.API}/eventos/${jogoId}`, evento);
  }

  

}
