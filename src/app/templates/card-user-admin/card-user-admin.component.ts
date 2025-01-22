import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-card-user-admin',
  templateUrl: './card-user-admin.component.html',
  styleUrls: ['./card-user-admin.component.css'],
})
export class CardUserAdminComponent implements OnInit {
  usuarios: {
    id: number;
    nombre: string;
    departamento: string;
    correo: string;
    foto: string;
  }[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    // Cargar la lista inicial de tareas
    this.usuarios = this.tareasService.getUsuarios();
  }

  eliminarUsuario(id: number) {
    this.tareasService.deleteUsuario(id); // Eliminamos la tarea del servicio
    this.usuarios = this.tareasService.getUsuarios(); // Actualizamos la lista en la vista
  }

}
