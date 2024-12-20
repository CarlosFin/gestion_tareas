import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas-usuario',
  templateUrl: './lista-tareas-usuario.component.html',
  styleUrls: ['./lista-tareas-usuario.component.css'],
})
export class ListaTareasUsuarioComponent {
  textoBoton: string = '';
  listado_tareas: string = 'Listado de tareas';

  entrada: string = 'Inicio turno';
  salida: string = 'Fin turno';

  visualizacion: string = 'none';
}
