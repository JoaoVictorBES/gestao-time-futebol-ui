
import { JogoService } from '../../../services/jogo.service';
import { CommonModule } from '@angular/common';
import { Jogo } from '../../../models/jogo';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.scss'
})
export class ListaJogosComponent {

  JogoService = inject(JogoService);

  listaDeJogos: Jogo[] = [];

  jogo: Jogo = new Jogo();

  router = inject(Router);

  constructor(private http: HttpClient) { }


  list(){

    this.JogoService.list().subscribe({

     next: lista => {
       this.listaDeJogos = lista;
     },
     error: erro => {
       console.error("Ocorreu algum erro")
     }

    })
  }

  delete(id: number){
    console.log('ID para deletar:', id);
    if (confirm('Tem certeza que deseja deletar este jogo?')) {
      this.JogoService.delete(id).subscribe({
        next: () => {
          alert('Jogo deletado com sucesso!');
          this.list();
        },
        error: erro => {
          console.error('Erro ao deletar o jogo', erro);
          alert('Erro ao deletar o jogo');
        }
      });
    }

  }

  update(jogo: Jogo){

    this.router.navigate(['/cadastro/jogos/', jogo.id]);

  }

  ngOnInit(): void {
    this.list();
}
}
