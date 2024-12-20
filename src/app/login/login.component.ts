import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  textoBoton: string = '';

  iniciar_sesion: string = 'Iniciar sesion';
}
