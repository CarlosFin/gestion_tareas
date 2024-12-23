import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() visualizacion: string = 'inline-block';

  tareas = [
    {
      titulo:
        'Elaboración de un Plan Estratégico para el Crecimiento de la Empresa',
      descripcion:
        'Definir metas a largo plazo y estrategias para el crecimiento, identificando oportunidades y recursos necesarios',
    },
    {
      titulo:
        'Análisis y Optimización de los Procesos Administrativos Internos',
      descripcion: 'Evaluar y mejorar los procesos internos para aumentar la eficiencia y reducir costos operativos.',
    },
    {
      titulo: 'Gestión Financiera: Elaboración de un Presupuesto Anual',
      descripcion: 'Crear un presupuesto basado en ingresos y gastos estimados, asignando recursos para el próximo año fiscal.',
    },
    {
      titulo:
        'Desarrollo de Políticas de Recursos Humanos para la Mejora del Clima Laboral',
      descripcion: 'Crear o actualizar políticas para mejorar el ambiente laboral y aumentar la satisfacción y productividad de los empleados.',
    },
  ];
}
