import { JogoService } from '../../../services/jogo.service';
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

  JogoService = inject(JogoService);

  jogo: Jogo = new Jogo();

  create() {
    this.JogoService.create(this.jogo).subscribe({

      next: mensagem => {
        alert("Jogo salvo com sucesso!");
        this.jogo = new Jogo();
        this.router.navigate(['/jogos'])
      },

      error: erro =>{
        alert('Ocorreu algum erro')
      }

    });
  }
}


