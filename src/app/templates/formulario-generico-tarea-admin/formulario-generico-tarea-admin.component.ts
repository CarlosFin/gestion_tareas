import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-formulario-generico-tarea-admin',
  templateUrl: './formulario-generico-tarea-admin.component.html',
  styleUrls: ['./formulario-generico-tarea-admin.component.css'],
})
export class FormularioGenericoTareaAdminComponent {
  @Input() tareaR: boolean = false;
  @Input() descripcionR: boolean = false;
  @Input() emailR: boolean = false;
  @Input() usuarioR: boolean = false;
  @Input() departamentoR: boolean = false;
  @Input() visualizacion: string = 'inline-block';

  textoBoton: string = '';

  cancelar: string = 'Regresar';
  crear: string = 'Crear';
  actualizar: string = 'Actualizar';

  tareaId: number = 0;
  tareaNombre: string | null = null;
  tareaDescripcion: string | null = null;
  tareaCorreo: string | null = null;
  tareaUsuario: string | null = null;
  tareaDepartamento: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private tareasService: TareasService
  ) {}

  ngOnInit() {
    this.tareaId = Number(this.route.snapshot.paramMap.get('id'));
    this.tareaNombre = this.route.snapshot.queryParamMap.get('nombre');
    this.tareaDescripcion =
      this.route.snapshot.queryParamMap.get('descripcion');
    this.tareaCorreo = this.route.snapshot.queryParamMap.get('correo');
    this.tareaUsuario = this.route.snapshot.queryParamMap.get('usuario');
    this.tareaDepartamento =
      this.route.snapshot.queryParamMap.get('departamento');

    this.nombreTarea = this.tareaNombre || '';
    this.descripcionTarea = this.tareaDescripcion || '';
    this.correoTarea = this.tareaCorreo || '';
    this.usuarioTarea = this.tareaUsuario || '';
    this.departamentoTarea = this.tareaDepartamento || '';
  }

  tareas1: { id: number; nombre: string; descripcion: string }[] = [];
  nombreTarea: string = '';
  descripcionTarea: string = '';
  correoTarea: string = '';
  usuarioTarea: string = '';
  departamentoTarea: string = '';
  errorMensaje: string = '';

  agregarTarea() {
    if (this.nombreTarea.trim() && this.descripcionTarea.trim()) {
      const nueva = {
        id: Date.now(), // Generamos un ID único basado en la fecha actual
        nombre: this.nombreTarea,
        descripcion: this.descripcionTarea,
        correo: this.correoTarea,
        usuario: this.usuarioTarea,
        departamento: this.departamentoTarea,
      };
      this.tareasService.tareas.push(nueva); // Añadimos la tarea al servicio
      this.tareas1 = this.tareasService.getTareas1(); // Actualizamos la lista en la vista
      this.nombreTarea = ''; // Limpiamos el campo de entrada
    } else {
      this.errorMensaje = 'No puedes añadir una tarea vacía';
    }
  }

  tareas: any[] = [];
  tarea: any = {
    id: Number(this.route.snapshot.paramMap.get('id')),
    nombre: this.nombreTarea,
    descripcion: this.descripcionTarea,
    correo: this.correoTarea,
    usuario: this.usuarioTarea,
    departamento: this.departamentoTarea,
  };

  actualizarTarea(id: number) {
    const nuevaInfo = {
      nombre: this.nombreTarea,
      descripcion: this.descripcionTarea,
      correo: this.correoTarea,
      usuario: this.usuarioTarea,
      departamento: this.departamentoTarea,
    }; // Marcamos la tarea como completada
    this.tareasService.updateTarea(id, nuevaInfo); // Actualizamos la tarea
    this.tareas = this.tareasService.getTareas(); // Actualizamos la lista en la vista
  }
}
