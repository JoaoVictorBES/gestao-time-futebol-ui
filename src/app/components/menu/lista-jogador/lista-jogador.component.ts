import { Component, inject } from '@angular/core';
import { JogadorService } from '../../../services/jogador.service';
import { Jogador } from '../../../models/jogador';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaJogosComponent } from '../lista-jogos/lista-jogos.component';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';

@Component({
  selector: 'app-lista-jogador',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './lista-jogador.component.html',
  styleUrl: './lista-jogador.component.scss'
})
export class ListaJogadorComponent {

  JogadorService = inject(JogadorService);

  lista: Jogador[] = [];

  listaDeJogo = ListaJogosComponent;

  jogadores: any;

  list(){

    this.JogadorService.list().subscribe({

     next: lista => {
       this.lista = lista;
     },
     error: erro => {
       alert('Ocorreu algum erro')
     }

    })

 }

 adicionarGol(id: number) {
  this.JogadorService.adicionarGol(id).subscribe(jogadorAtualizado => {

  });
}

adicionarAssistencia(id: number) {
  this.JogadorService.adicionarAssistencia(id).subscribe(jogadorAtualizado => {

  });
}


}
