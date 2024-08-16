import { JogadorService } from './../../../services/jogador.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-cadastro-jogador',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-jogador.component.html',
  styleUrl: './cadastro-jogador.component.scss'
})
export class CadastroJogadorComponent {

  JogadorService = inject(JogadorService);

  

}
