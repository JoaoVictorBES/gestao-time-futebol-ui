import { evento } from './../../../models/evento';
import { JogadorService } from './../../../services/jogador.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { JogoService } from '../../../services/jogo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Jogador } from '../../../models/jogador';
import { Jogo } from '../../../models/jogo';

@Component({
  selector: 'app-eventos-do-jogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eventos-do-jogo.component.html',
  styleUrl: './eventos-do-jogo.component.scss'
})
export class EventosDoJogoComponent{

  jogoId!: number;
  jogadores: Jogador[] = [];
  eventos: evento[] = [];

  router = inject(Router);

  evento = {
    tipoEvento: '',
    jogadorId: null,
  };

  jogo: Jogo = new Jogo();

  constructor(

    private jogadorService: JogadorService,
    private jogoService: JogoService,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jogoId = +id;
      this.carregarJogo();
      this.carregarJogadores();
    }

  }

  carregarJogo(): void {
    this.jogoService.findById(this.jogoId).subscribe({
      next: (jogo) => {
        this.jogo = jogo;
      },
      error: (err) => {
        console.error('Erro ao carregar o jogo', err);
      }
    });
  }

  carregarJogadores(): void {

    this.jogadorService.list().subscribe({
      next: (jogadores) => {
        this.jogadores = jogadores;
      },
      error: (err) => {
        console.error('Erro ao carregar jogadores', err);
      }
    });

  }


  adicionarEvento(): void {

    const novoEvento = {
      tipoEvento: this.evento.tipoEvento,
      jogadorId: this.evento.jogadorId,
    };

    this.jogoService.adicionarEvento(this.jogoId, novoEvento).subscribe({
      next:() =>{
        this.carregarJogo();
        this.evento = {tipoEvento: '', jogadorId: null}
      },
      error: (err)=> {
      console.error('Erro ao adicionar evento', err);
      }

    });

  }

  delete(id: number){

    if (confirm('Tem certeza que deseja deletar este jogo?')) {
      this.jogoService.delete(id).subscribe({
        next: () => {
          alert('Jogo deletado com sucesso!');
          this.router.navigate(['/jogos']);
        },
        error: erro => {
          console.error('Erro ao deletar o jogo', erro);
          alert('Erro ao deletar o jogador');
        }
      });
    }

  }

  update(jogo: Jogo){

    this.router.navigate(['/cadastro/jogos/', jogo.id]);

  }

}


