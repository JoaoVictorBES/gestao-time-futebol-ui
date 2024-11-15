
import { JogoService } from '../../../services/jogo.service';
import { CommonModule } from '@angular/common';
import { Jogo } from '../../../models/jogo';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../auth/login.service';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.scss'
})
export class ListaJogosComponent {

  loginService = inject(LoginService);

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
       alert ('Ufa');
     }

    })
  }

  delete(id: number){

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

  navMenu(rota: string){

    this.router.navigate(['/menu']);
  }

  navCadastro(rota: string){

    this.router.navigate(['/cadastro/jogos']);
  }

  viewDetails(id: number) {
    this.router.navigate(['/eventos', id]);
  }

}
