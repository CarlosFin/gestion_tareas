import { Component, Input } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() visualizacion: string = 'inline-block';

  tareas: {
    id: number;
    nombre: string;
    descripcion: string;
    correo: string;
    usuario: string;
    departamento: string;
  }[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    // Cargar la lista inicial de tareas
    this.tareas = this.tareasService.getTareas();
  }

  eliminarTarea(id: number) {
    this.tareasService.deleteTarea(id); // Eliminamos la tarea del servicio
    this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
  }

}
