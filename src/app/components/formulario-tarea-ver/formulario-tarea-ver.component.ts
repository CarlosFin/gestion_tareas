import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea-ver',
  templateUrl: './formulario-tarea-ver.component.html',
  styleUrls: ['./formulario-tarea-ver.component.css'],
})

export class FormularioTareaVerComponent implements OnInit {
  textoBoton: string = '';

  regresar: string = 'Regresar';

  tareaRead: boolean = true;
  descripcionRead: boolean = true;
  emailRead: boolean = true;
  usuarioRead: boolean = true;
  departamentoRead: boolean = true;

  redireccion: string = '';

  constructor() { }

  ngOnInit(): void {
  //  if (this.AuthService.user.role === "admin"){
  //   this.redireccion = "/pantalla-que-quieras"
  //  }else{
  //   this.redireccion = "/pantalla-que-quieras"
  // }
  }

}
