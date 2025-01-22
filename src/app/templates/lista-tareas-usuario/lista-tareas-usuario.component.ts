import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';

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

  datosRecibidos: { nombre: string; password: string } | null = null;
  recibirDatos(datos: { nombre: string; password: string }) {
    this.datosRecibidos = datos;
  }

  hora: string = ''; // Esta variable contendrá la hora actual
  horaF: string = ''; // Esta variable contendrá la hora actual

  // Función para obtener la hora actual
  mostrarHora() {
    const ahora = new Date();
    this.hora = ahora.toLocaleTimeString(); // Formato de la hora en cadena
  }
  // Función para obtener la hora actual
  mostrarHoraF() {
    const ahora = new Date();
    this.horaF = ahora.toLocaleTimeString(); // Formato de la hora en cadena
  }
}
