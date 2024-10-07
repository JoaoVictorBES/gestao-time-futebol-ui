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

    adicionarGol(id: number) {
      this.JogadorService.adicionarGol(id).subscribe(jogadorAtualizado => {

      });
    }

    adicionarAssistencia(id: number) {
      this.JogadorService.adicionarAssistencia(id).subscribe(jogadorAtualizado => {

      });
    }
    navMenu(rota: string){

      this.router.navigate(['/menu']);
    }

}
