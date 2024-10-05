import { JogoService } from '../../../services/jogo.service';
import { Component, inject } from '@angular/core';
import { Jogo } from '../../../models/jogo';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-jogos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './cadastro-jogos.component.html',
  styleUrls: ['./cadastro-jogos.component.scss']
})

export class CadastroJogosComponent {


  JogoService = inject(JogoService);

  route = inject(ActivatedRoute);

  router = inject(Router);

  listaDeJogos: Jogo[] = [];

  jogo: Jogo = new Jogo();

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.JogoService.findById(+id).subscribe({
        next: (jogo) => {
          this.jogo = jogo;
        },
        error: (err) => {
          console.error('Erro ao carregar o jogo');
        }
      });
    }
  }

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

  delete(id: number){

    if (confirm('Tem certeza que deseja deletar este jogo?')) {
      this.JogoService.delete(id).subscribe({
        next: () => {
          alert('Jogo deletado com sucesso!');
          this.jogo = new Jogo();
        },
        error: erro => {
          alert('Erro ao deletar o jogo');
        }
      });
    }

  }

  update() {
    this.JogoService.update(this.jogo.id, this.jogo).subscribe({
      next: () => {
        alert('Jogo atualizado com sucesso!');
        this.router.navigate(['/jogos']);
      },
      error: () => {
        alert('Erro ao atualizar o jogo');
      }
    });
  }
  
}




