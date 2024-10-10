
import { CommonModule } from '@angular/common';
import { Jogador } from '../../../models/jogador';
import { JogadorService } from './../../../services/jogador.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadastro-jogador',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.scss']
})

export class CadastroJogadorComponent {

  JogadorService = inject(JogadorService);

  route = inject(ActivatedRoute);

  router = inject(Router);

  jogador: Jogador = new Jogador();

  lista: Jogador[] = [];


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.JogadorService.findById(+id).subscribe({
        next: (jogador) => {
          this.jogador = jogador;
        },
        error: (err) => {
          console.error('Erro ao carregar o jogo');
        }
      });
    }
  }

  delete(Jogador: Jogador){

    if (confirm("Tem certeza que deseja deletar este jogador?") ){

      this.JogadorService.delete(Jogador.id).subscribe({

        next: mensagem => {
          alert("Deletado com sucesso!");
        },

        error: erro =>{
          alert('Ocorreu algum erro')
        }

      });

    }
  }

  create(){

      this.JogadorService.create(this.jogador).subscribe({

        next: retorno => {
          alert('Salvo com sucesso!');
          this.jogador = new Jogador();
          this.router.navigate(['/lista/jogador'])
        },

        error: erro => {
          alert('Ocorreu algum erro')
        }
      })

  }

  update() {

    this.JogadorService.update(this.jogador, this.jogador.id).subscribe({
      next: () => {
        alert('Jogador atualizado com sucesso!');
        this.router.navigate(['/lista/jogador']);
      },
      error: () => {
        alert('Erro ao atualizar o jogador');
      }

    });
  }

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

  navMenu(rota: string){

    this.router.navigate(['/menu']);
  }

}


