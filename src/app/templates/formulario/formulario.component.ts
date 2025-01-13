import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Input() nombreR: boolean = false;
  @Input() departamentoR: boolean = false;
  @Input() emailR: boolean = false;
  @Input() contraR: boolean = false;
  @Input() ccontraR: boolean = false;

  @Input() imagenD: string = 'block';
  @Input() fotoD: string = 'block';

  @Input() contraRD: string = 'block';
  @Input() ccontraRD: string = 'block';

  usuarioId: number = 0;
  usuarioNombre: string | null = null;
  usuarioDepartamento: string | null = null;
  usuarioCorreo: string | null = null;
  usuarioFoto: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioNombre = this.route.snapshot.queryParamMap.get('nombre');
    this.usuarioDepartamento = this.route.snapshot.queryParamMap.get('departamento');
    this.usuarioCorreo = this.route.snapshot.queryParamMap.get('correo');
    this.usuarioFoto = this.route.snapshot.queryParamMap.get('foto');
  }
}
