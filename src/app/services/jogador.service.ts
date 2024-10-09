import { Jogador } from './../models/jogador';
import { inject, Injectable } from '@angular/core';
import { response } from 'express';
import { text } from 'stream/consumers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JogadorService {

  private http: HttpClient;

  API = "http://localhost:8080/api/jogadores";

  constructor(http: HttpClient) {
    this.http = http;
  }

  create(jogador: Jogador): Observable<Jogador>{

    return this.http.post<Jogador>(`${this.API}/create`, jogador);

  }

  update(jogador: Jogador, id: number): Observable<Jogador>{

    return this.http.put<Jogador>(`${this.API}/update/${id}`, jogador);

  }

  delete(id: number) : Observable<string>{

    return this.http.delete<string>(`${this.API}/delete/${id}`, { responseType: 'text' as 'json' });

  }

  list(): Observable<Jogador[]>{

    return this.http.get<Jogador[]>(`${this.API}/list`);

  }

  adicionarGol(id: number): Observable<Jogador> {

    return this.http.put<Jogador>(`${this.API}/${id}/gol`, {});

  }

  adicionarAssistencia(id: number): Observable<Jogador> {

    return this.http.put<Jogador>(`${this.API}/${id}/assistencia/`, {});

  }

}
