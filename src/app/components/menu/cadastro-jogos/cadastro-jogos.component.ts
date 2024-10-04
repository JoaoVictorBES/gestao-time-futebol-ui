import { JogosService } from './../../../services/jogos.service';
import { Component, inject } from '@angular/core';
import { Jogo } from '../../../models/jogo';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-jogos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './cadastro-jogos.component.html',
  styleUrls: ['./cadastro-jogos.component.scss']
})

export class CadastroJogosComponent {

  constructor(private router: Router) {}

  JogosService = inject(JogosService);

  jogo: Jogo = new Jogo();

  create() {
    this.JogosService.create(this.jogo).subscribe({

      next: mensagem => {
        alert("Jogo salvo com sucesso!");
        this.jogo = new Jogo();
      },

      error: erro =>{
        alert('Ocorreu algum erro')
      }

    });
  }
}


