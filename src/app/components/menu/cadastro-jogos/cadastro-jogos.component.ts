import { Component, inject } from '@angular/core';
import { GamesService } from '../../../services/games.service';

@Component({
  selector: 'app-cadastro-jogos',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-jogos.component.html',
  styleUrl: './cadastro-jogos.component.scss'
})
export class CadastroJogosComponent {

  GamesService = inject(GamesService);

}
