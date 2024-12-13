import { LoginService } from './../../auth/login.service';
import { UsuarioService } from './../../auth/usuario.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../auth/usuario';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Login } from '../../auth/login';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  router = inject(Router);
  UsuarioService = inject(UsuarioService);
  usuario: Usuario = new Usuario();
  login: Login = new Login();

  ngOnInit(): void {

  }

  cadastrar(){


      console.log('Dados enviados ao backend:', this.usuario);

      this.UsuarioService.create(this.usuario).subscribe({
        next: (response) => {
          console.log('Usuário cadastrado com sucesso:', response);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar usuário:', err);
          alert('Falha no cadastro! Tente novamente.');
        }
      })

  }

}
