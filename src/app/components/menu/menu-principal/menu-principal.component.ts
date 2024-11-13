import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.scss'
})
export class MenuPrincipalComponent {

  constructor(private http: HttpClient) { }

  router = inject(Router);

  navListaJogos(rota: string) {
    this.router.navigate(['/jogos']);
  }

  navListaJogadores(rota: string){
    this.router.navigate(['lista/jogador'])
  }

  exit(rota: string){
    this.router.navigate(['/login'])
  }

}
