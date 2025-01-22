import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  textoBoton: string = '';

  iniciar_sesion: string = 'Iniciar sesion';

  @Output() datosEnviados = new EventEmitter<{
    nombre: string;
    password: string;
  }>();

  nombre: string = '';
  password: string = '';

  enviarDatos() {
    if (this.nombre && this.password) {
      const datosUsuario = {
        nombre: this.nombre,
        password: this.password,
      };

      this.datosEnviados.emit(datosUsuario);

      this.nombre = '';
      this.password = '';
    }
  }
}
