import { Component, inject } from '@angular/core';
import { Router } from 'express';
import { AuthService } from '../../auth/auth.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loginData: Login = new Login();

  login() {
    this.authService.login(this.loginData).subscribe({
      next: user => {
        this.authService.setUser(user);
        this.router.navigate(['']);
      },
      error: err => {
        alert('Login falhou');
      }
    });
  }
}
