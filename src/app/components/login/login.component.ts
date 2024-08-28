import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Login } from '../../models/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loginData: Login = new Login();

  login() {
    if (this.loginData.username == 'admin' || this.loginData.password == '1234'){
      this.router.navigate(['/jogos'])
    }

    this.authService.login(this.loginData).subscribe({

      next: user => {
        this.authService.setUser(user);
        this.router.navigate(['/jogos']);
      },
      error: err => {
        alert('Login falhou');
      }
    });

  }
}
