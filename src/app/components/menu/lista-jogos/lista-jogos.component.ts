import { JogosService } from './../../../services/jogos.service';
import { CommonModule } from '@angular/common';
import { Jogo } from '../../../models/jogo';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.scss'
})
export class ListaJogosComponent {

  JogosService = inject(JogosService);

  lista: Jogo[] = [];

  constructor(private http: HttpClient) { }

  list(){

    this.JogosService.list().subscribe({

     next: lista => {
       this.lista = lista;
     },
     error: erro => {
       alert('Ocorreu algum erro')
     }

    })
  }

  delete(id: number){

    if (confirm('Tem certeza que deseja deletar este jogo?')) {
      this.JogosService.delete(id).subscribe({
        next: () => {
          alert('Jogo deletado com sucesso!');
          this.list(); 
        },
        error: erro => {
          alert('Erro ao deletar o jogo');
        }
      });
    }

  }

  update(jogo: Jogo){

    console.log('Editar jogo: ', jogo);

  }

  ngOnInit(): void {
    this.list();
}
}
