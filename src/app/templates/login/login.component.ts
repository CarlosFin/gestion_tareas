import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
// import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  textoBoton: string = '';
  iniciar_sesion: string = 'Iniciar sesion';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  usuario = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  ngOnInit() {}

  login() {
    const email = this.usuario.get('email')?.value ?? '';
    const password = this.usuario.get('password')?.value ?? '';
    this.auth
      .loginUser(email, password)
      .then((result) => {
        this.router.navigate(['/lista-tareas-usuario']);
      })
      // .catch((err) => {
      //   this.alertCtrl
      //     .create({
      //       header: 'Error',
      //       subHeader: err.message,
      //       buttons: ['Aceptar'],
      //     })
      //     .then((alert) => {
      //       alert.present();
      //     });
      // });
  }

  // @Output() datosEnviados = new EventEmitter<{
  //   nombre: string;
  //   password: string;
  // }>();

  // nombre: string = '';
  // password: string = '';

  // enviarDatos() {
  //   if (this.nombre && this.password) {
  //     const datosUsuario = {
  //       nombre: this.nombre,
  //       password: this.password,
  //     };

  //     this.datosEnviados.emit(datosUsuario);

  //     this.nombre = '';
  //     this.password = '';
  //   }
  // }
}
