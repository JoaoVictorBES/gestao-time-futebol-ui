import { CommonModule } from '@angular/common';
import { Jogo } from '../../../models/jogo';
import { GamesService } from './../../../services/games.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.scss'
})
export class ListaJogosComponent {

  GamesService = inject(GamesService);

  lista: Jogo[] = [];

  list(){

    this.GamesService.list().subscribe({

     next: lista => {
       this.lista = lista;
     },
     error: erro => {
       alert('Ocorreu algum erro')
     }

    })

 }
}
