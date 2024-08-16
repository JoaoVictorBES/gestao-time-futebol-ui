import { GamesService } from './../../../services/games.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [],
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.scss'
})
export class ListaJogosComponent {

  GamesService = inject(GamesService);
}
