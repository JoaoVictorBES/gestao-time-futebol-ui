import { Routes } from '@angular/router';
import { ListaJogosComponent } from './components/menu/lista-jogos/lista-jogos.component';
import { CadastroJogadorComponent } from './components/menu/cadastro-jogador/cadastro-jogador.component';
import { CadastroJogosComponent } from './components/menu/cadastro-jogos/cadastro-jogos.component';
import { ListaJogadorComponent } from './components/menu/lista-jogador/lista-jogador.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MenuPrincipalComponent } from './components/menu/menu-principal/menu-principal.component';
import { EventosDoJogoComponent } from './components/menu/eventos-do-jogo/eventos-do-jogo.component';
import { loginGuard } from './auth/login.guard';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {path: "login", component: LoginComponent },

  {path: "menu", component: MenuPrincipalComponent},

  {path: "jogos", component: ListaJogosComponent },

  {path: "jogos/:id", component: ListaJogosComponent },

  {path: "cadastro/jogos/:id", component: CadastroJogosComponent, canActivate: [loginGuard] },

  {path: "cadastro/jogos", component: CadastroJogosComponent, canActivate: [loginGuard] },

  {path: "cadastro/jogador", component: CadastroJogadorComponent, canActivate: [loginGuard]},

  {path: "cadastro/jogador/:id", component: CadastroJogadorComponent, canActivate: [loginGuard] },

  {path: "lista/jogador", component: ListaJogadorComponent },

  {path: "eventos/:id", component: EventosDoJogoComponent },

];
