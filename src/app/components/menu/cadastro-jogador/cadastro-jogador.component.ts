
import { CommonModule } from '@angular/common';
import { Jogador } from '../../../models/jogador';
import { JogadorService } from './../../../services/jogador.service';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadastro-jogador',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.scss']
})

export class CadastroJogadorComponent {

  JogadorService = inject(JogadorService);

  jogador: Jogador = new Jogador();
  lista: Jogador[] = [];
  modalRef: any;


  delete(Jogador: Jogador){

    if (confirm("Tem certeza que deseja deletar este registro?") ){

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
    if(this.jogador.id > 0){

      this.JogadorService.update(this.jogador, this.jogador.id).subscribe({

        next: mensagem => {
          alert('Editado com sucesso!');
        },

        error: erro => {
          alert('Ocorreu algum erro')
        }

      })

    }else{

      this.JogadorService.create(this.jogador).subscribe({

        next: retorno => {
          alert('Salvo com sucesso!');
        },

        error: erro => {
          alert('Ocorreu algum erro')
        }
      })

    }

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

}


