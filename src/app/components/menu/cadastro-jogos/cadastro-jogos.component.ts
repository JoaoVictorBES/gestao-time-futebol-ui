import { Component, inject } from '@angular/core';
import { GamesService } from '../../../services/games.service';
import { Jogo } from '../../../models/jogo';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadastro-jogos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cadastro-jogos.component.html',
  styleUrl: './cadastro-jogos.component.scss'
})
export class CadastroJogosComponent {

  GamesService = inject(GamesService);

  jogo: Jogo = new Jogo();

  create(){

    this.GamesService.create(this.jogo).subscribe({

        next: retorno => {
          alert('Salvo com sucesso!');
        },

        error: erro => {
          alert('Ocorreu algum erro')
        }
    })

  }

}


