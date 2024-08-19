import { CommonModule, Time } from '@angular/common';
import { TimeService } from './../../../services/time.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadastro-time',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './cadastro-time.component.html',
  styleUrl: './cadastro-time.component.scss'
})
export class CadastroTimeComponent {

  TimeService = inject(TimeService);

  lista: Time[] = [];

}
