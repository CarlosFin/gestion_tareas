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
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  usuario = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  ngOnInit() {}

  login() {
    this.errorMessage = '';
    const email = this.usuario.get('email')?.value ?? '';
    const password = this.usuario.get('password')?.value ?? '';
    this.auth
      .loginUser(email, password)
      .then((result) => {
        if (email === 'carlos@gmail.com') {
          this.router.navigate(['/lista-tarea-admin']);
        } else {
          this.router.navigate(['/lista-tareas-usuario']);
        }
      })
      .catch((err) => {
        this.errorMessage = "El usuario o la contraseña son incorrectos";
      });
  }
}
