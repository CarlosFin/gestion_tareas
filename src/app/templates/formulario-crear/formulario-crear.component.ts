import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css'],
})

export class FormularioCrearComponent {
  @Input() nombreR: boolean = false;
  @Input() departamentoR: boolean = false;
  @Input() emailR: boolean = false;
  @Input() contraR: boolean = false;
  @Input() ccontraR: boolean = false;

  @Input() imagenD: string = 'block';
  @Input() fotoD: string = 'block';

  @Input() contraRD: string = 'block';
  @Input() ccontraRD: string = 'block';

  textoBoton: string = '';

  editar: string = 'Actualizar';
  cancelar: string = 'Cancelar';

  usuarioId: number = 0;
  usuarioNombre: string | null = null;
  usuarioDepartamento: string | null = null;
  usuarioCorreo: string | null = null;
  usuarioFoto: string | null = null;

  crear: string = 'Crear';

  constructor(
    private route: ActivatedRoute,
    private tareasService: TareasService
  ) {}

  ngOnInit() {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioNombre = this.route.snapshot.queryParamMap.get('nombre');
    this.usuarioDepartamento =
      this.route.snapshot.queryParamMap.get('departamento');
    this.usuarioCorreo = this.route.snapshot.queryParamMap.get('correo');
    this.usuarioFoto = this.route.snapshot.queryParamMap.get('foto');

    this.nombreUsuario = this.usuarioNombre || '';
    this.departamentoUsuario = this.usuarioDepartamento || '';
    this.correoUsuario = this.usuarioCorreo || '';
    this.fotoUsuario = this.usuarioFoto || '';
  }

  usuarios1: { id: number; nombre: string; departamento: string }[] = [];
  nombreUsuario: string = '';
  departamentoUsuario: string = '';
  correoUsuario: string = '';
  contraUsuario: string = '';
  ccontraUsuario: string = '';
  fotoUsuario: string = '';
  errorMensaje: string = '';

  // Método para manejar la carga de la foto
  onFotoUsuarioChange(event: any) {
    const file = event.target.files[0]; // Obtener el primer archivo seleccionado
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fotoUsuario = reader.result as string; // Convertir la imagen a base64 o URL temporal
      };
      reader.readAsDataURL(file); // Leer la imagen como base64
    }
  }

  agregarTarea() {
    if (this.nombreUsuario.trim() && this.departamentoUsuario.trim()) {
      const nueva = {
        id: Date.now(), // Generamos un ID único basado en la fecha actual
        nombre: this.nombreUsuario,
        departamento: this.departamentoUsuario,
        correo: this.correoUsuario,
        foto: this.fotoUsuario,
      };
      this.tareasService.usuarios.push(nueva); // Añadimos la tarea al servicio
      this.usuarios1 = this.tareasService.getUsuarios1(); // Actualizamos la lista en la vista
      this.nombreUsuario = ''; // Limpiamos el campo de entrada
    } else {
      this.errorMensaje = 'No puedes añadir una tarea vacía';
    }
  }

  usuarios: any[] = [];
  usuario: any = {
    id: Number(this.route.snapshot.paramMap.get('id')),
    nombre: this.nombreUsuario,
    departamento: this.departamentoUsuario,
    correo: this.correoUsuario,
    foto: this.fotoUsuario,
  };

  actualizarUsuario(id: number) {
    const nuevaInfo = {
      nombre: this.nombreUsuario,
      departamento: this.departamentoUsuario,
      correo: this.correoUsuario,
      foto: this.fotoUsuario,
    }; // Marcamos la tarea como completada
    this.tareasService.updateUsuario(id, nuevaInfo); // Actualizamos la tarea
    this.usuarios = this.tareasService.getUsuarios(); // Actualizamos la lista en la vista
  }
}
