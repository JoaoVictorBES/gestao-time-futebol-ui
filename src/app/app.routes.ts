import { Routes } from '@angular/router';
import { ListaJogosComponent } from './components/menu/lista-jogos/lista-jogos.component';
import { CadastroJogadorComponent } from './components/menu/cadastro-jogador/cadastro-jogador.component';
import { CadastroJogosComponent } from './components/menu/cadastro-jogos/cadastro-jogos.component';
import { ListaJogadorComponent } from './components/menu/lista-jogador/lista-jogador.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [

  {path: "lista/jogos", component: ListaJogosComponent },

  {path: "cadastro/jogos", component: CadastroJogosComponent, canActivate: [AuthGuard] },

  {path: "cadastro/jogador", component: CadastroJogadorComponent, canActivate: [AuthGuard] },

  {path: "lista/jogador", component: ListaJogadorComponent },

  { path: "login", component: LoginComponent }

];
