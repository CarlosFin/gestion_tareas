import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea-ver-admin',
  templateUrl: './formulario-tarea-ver-admin.component.html',
  styleUrls: ['./formulario-tarea-ver-admin.component.css'],
})
export class FormularioTareaVerAdminComponent {
  textoBoton: string = '';

  cancelar: string = 'Regresar';

  tareaRead: boolean = true;
  descripcionRead: boolean = true;
  emailRead: boolean = true;
  usuarioRead: boolean = true;
  departamentoRead: boolean = true;


  constructor() {}

  ngOnInit(): void {
    //  if (this.AuthService.user.role === "admin"){
    //   this.redireccion = "/pantalla-que-quieras"
    //  }else{
    //   this.redireccion = "/pantalla-que-quieras"
    // }
  }
}
