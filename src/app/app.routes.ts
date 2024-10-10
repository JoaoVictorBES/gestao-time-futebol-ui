import { Routes } from '@angular/router';
import { ListaJogosComponent } from './components/menu/lista-jogos/lista-jogos.component';
import { CadastroJogadorComponent } from './components/menu/cadastro-jogador/cadastro-jogador.component';
import { CadastroJogosComponent } from './components/menu/cadastro-jogos/cadastro-jogos.component';
import { ListaJogadorComponent } from './components/menu/lista-jogador/lista-jogador.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MenuPrincipalComponent } from './components/menu/menu-principal/menu-principal.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {path: "login", component: LoginComponent },

  {path: "menu", component: MenuPrincipalComponent},

  {path: "jogos", component: ListaJogosComponent },

  {path: "jogos/:id", component: ListaJogosComponent },

  {path: "cadastro/jogos/:id", component: CadastroJogosComponent },

  {path: "cadastro/jogos", component: CadastroJogosComponent },

  {path: "cadastro/jogador", component: CadastroJogadorComponent},

  {path: "cadastro/jogador/:id", component: CadastroJogadorComponent },

  {path: "lista/jogador", component: ListaJogadorComponent },

];
