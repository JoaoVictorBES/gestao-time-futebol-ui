import { Component, inject } from '@angular/core';
import { JogadorService } from '../../../services/jogador.service';
import { Jogador } from '../../../models/jogador';

@Component({
  selector: 'app-lista-jogador',
  standalone: true,
  imports: [],
  templateUrl: './lista-jogador.component.html',
  styleUrl: './lista-jogador.component.scss'
})
export class ListaJogadorComponent {

  JogadorService = inject(JogadorService);

  lista: Jogador[] = [];

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

}
