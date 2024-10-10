import { Component, inject } from '@angular/core';
import { JogadorService } from '../../../services/jogador.service';
import { Jogador } from '../../../models/jogador';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
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

      jogadores: Jogador[] = [];

      router = inject(Router);


      constructor(private http: HttpClient) { }

      ngOnInit() {
        this.list();
      }

      list(){

        this.JogadorService.list().subscribe({

        next: lista => {
          this.jogadores = lista;
        },
        error: erro => {
          alert('Ocorreu algum erro')
        }

        })

    }

    delete(id: number){

      if (confirm('Tem certeza que deseja deletar este jogador?')) {
        this.JogadorService.delete(id).subscribe({
          next: () => {
            alert('Jogo deletado com sucesso!');
            this.list();
          },
          error: erro => {
            console.error('Erro ao deletar o jogador', erro);
            alert('Erro ao deletar o jogador');
          }
        });
      }

    }

    update(jogador: Jogador){

      this.router.navigate(['/cadastro/jogador/', jogador.id]);

    }

    adicionarGol(id: number) {
      this.JogadorService.adicionarGol(id).subscribe({

        next: jogadorAtualizado => {
          alert(`Gol adicionado para ${jogadorAtualizado.nome}!`);
          this.list();
        },

        error: erro => {
          alert('Erro ao adicionar gol');
        }

      });
    }

    adicionarAssistencia(id: number) {
      this.JogadorService.adicionarAssistencia(id).subscribe({

        next: jogadorAtualizado => {
          alert(`Assistência adicionada para ${jogadorAtualizado.nome}!`);
          this.list();
        },

        error: erro => {
          alert('Erro ao adicionar assistência');
        }
      });
    }

    navMenu(rota: string){

      this.router.navigate(['/menu']);
    }

    navCadastro(rota: string){

      this.router.navigate(['/cadastro/jogador']);
    }

}
