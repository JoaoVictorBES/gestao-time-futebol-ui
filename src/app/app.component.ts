import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroJogadorComponent } from './components/menu/cadastro-jogador/cadastro-jogador.component';
import { CadastroJogosComponent } from './components/menu/cadastro-jogos/cadastro-jogos.component';
import { ListaJogadorComponent } from './components/menu/lista-jogador/lista-jogador.component';
import { ListaJogosComponent } from './components/menu/lista-jogos/lista-jogos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroJogadorComponent, CadastroJogosComponent, ListaJogadorComponent, ListaJogosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestao-spy-ui';
}
