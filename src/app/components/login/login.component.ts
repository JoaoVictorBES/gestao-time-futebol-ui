import { LoginService } from './../../auth/login.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Login } from '../../auth/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  LoginService = inject(LoginService);
  login: Login = new Login();

  constructor() {
    this.LoginService.removerToken();
  }

  logar() {

    this.LoginService.logar(this.login).subscribe({
      next: token => {
        if(token){
          this.LoginService.addToken(token);
          this.router.navigate(['/menu']);
        }else{
          alert('Usuário ou senha incorretos');
        }
      },
      error: erro => {
        alert('deu erro')
      }
    });

  }
}
