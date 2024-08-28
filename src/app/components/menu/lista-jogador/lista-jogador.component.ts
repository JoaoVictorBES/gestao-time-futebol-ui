import { Component, inject } from '@angular/core';
import { JogadorService } from '../../../services/jogador.service';
import { Jogador } from '../../../models/jogador';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-jogador',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './lista-jogador.component.html',
  styleUrl: './lista-jogador.component.scss'
})
export class ListaJogadorComponent {
delete(_t6: Jogador) {
throw new Error('Method not implemented.');
}

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
