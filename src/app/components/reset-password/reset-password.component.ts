import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../auth/usuario';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  usuario: Usuario = new Usuario();

}
