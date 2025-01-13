import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-generico-tarea',
  templateUrl: './formulario-generico-tarea.component.html',
  styleUrls: ['./formulario-generico-tarea.component.css'],
})
export class FormularioGenericoTareaComponent implements OnInit {
  @Input() tareaR: boolean = false;
  @Input() descripcionR: boolean = false;
  @Input() emailR: boolean = false;
  @Input() usuarioR: boolean = false;
  @Input() departamentoR: boolean = false;

  tareaId: number = 0;
  tareaNombre: string | null = null;
  tareaDescripcion: string | null = null;
  tareaCorreo: string | null = null;
  tareaUsuario: string | null = null;
  tareaDepartamento: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.tareaId = Number(this.route.snapshot.paramMap.get('id'));
    this.tareaNombre = this.route.snapshot.queryParamMap.get('nombre');
    this.tareaDescripcion = this.route.snapshot.queryParamMap.get('descripcion');
    this.tareaCorreo = this.route.snapshot.queryParamMap.get('correo');
    this.tareaUsuario = this.route.snapshot.queryParamMap.get('usuario');
    this.tareaDepartamento = this.route.snapshot.queryParamMap.get('departamento');
  }
}
