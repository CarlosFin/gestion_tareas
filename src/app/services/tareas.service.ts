import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  tareas = [
    {
      id: 1,
      nombre:
        'Elaboración de un Plan Estratégico para el Crecimiento de la Empresa',
      descripcion:
        'Definir metas a largo plazo y estrategias para el crecimiento, identificando oportunidades y recursos necesarios',
      correo: 'juan@gmail.com',
      usuario: 'Juan Perez',
      departamento: 'Dirección General',
    },
    {
      id: 2,
      nombre:
        'Análisis y Optimización de los Procesos Administrativos Internos',
      descripcion:
        'Evaluar y mejorar los procesos internos para aumentar la eficiencia y reducir costos operativos.',
      correo: 'clara@gmail.com',
      usuario: 'Clara Rodriguez',
      departamento: 'Administración',
    },
    {
      id: 3,
      nombre: 'Gestión Financiera: Elaboración de un Presupuesto Anual',
      descripcion:
        'Crear un presupuesto basado en ingresos y gastos estimados, asignando recursos para el próximo año fiscal.',
      correo: 'marcelina@gmail.com',
      usuario: 'Marcelina Lopez',
      departamento: 'Finanzas',
    },
    {
      id: 4,
      nombre:
        'Desarrollo de Políticas de Recursos Humanos para la Mejora del Clima Laboral',
      descripcion:
        'Crear o actualizar políticas para mejorar el ambiente laboral y aumentar la satisfacción y productividad de los empleados.',
      correo: 'antonio@gmail.com',
      usuario: 'Antonio Sanchez',
      departamento: 'Recursos Humanos',
    },
  ];

  // Obtener las tareas
  getTareas() {
    return this.tareas;
  }

  tareas1 = [
    {
      id: 1,
      nombre:
        'Elaboración de un Plan Estratégico para el Crecimiento de la Empresa',
      descripcion:
        'Definir metas a largo plazo y estrategias para el crecimiento, identificando oportunidades y recursos necesarios',
    },
    {
      id: 2,
      nombre:
        'Análisis y Optimización de los Procesos Administrativos Internos',
      descripcion:
        'Evaluar y mejorar los procesos internos para aumentar la eficiencia y reducir costos operativos.',
    },
    {
      id: 3,
      nombre: 'Gestión Financiera: Elaboración de un Presupuesto Anual',
      descripcion:
        'Crear un presupuesto basado en ingresos y gastos estimados, asignando recursos para el próximo año fiscal.',
    },
    {
      id: 4,
      nombre:
        'Desarrollo de Políticas de Recursos Humanos para la Mejora del Clima Laboral',
      descripcion:
        'Crear o actualizar políticas para mejorar el ambiente laboral y aumentar la satisfacción y productividad de los empleados.',
    },
  ];

  // Obtener las tareas
  getTareas1() {
    return this.tareas1;
  }

  // Borrar una tarea
  deleteTarea(id: number) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  // Actualizar tarea
  updateTarea(
    id: number,
    nuevaTarea: {
      nombre?: string;
      descripcion?: string;
      correo?: string;
      usuario?: string;
      departamento?: string;
    }
  ) {
    const index = this.tareas.findIndex((tarea) => tarea.id === id);

    if (index !== -1) {
      this.tareas[index] = {
        // Operador de propagación: copia todas las propiedades de la tarea original y sobrescribe las que se pasan en nuevaTarea
        ...this.tareas[index],
        ...nuevaTarea,
      };
    } else {
      console.error(`No se encontró la tarea con ID: ${id}`);
    }
  }

  usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      departamento: 'Dirección General',
      correo: 'juan@gmail.com',
      foto: '../../../assets/img/user.png',
    },
    {
      id: 2,
      nombre: 'Clara',
      departamento: 'Administración',
      correo: 'clara@gmail.com',
      foto: '../../../assets/img/user.png',
    },
    {
      id: 3,
      nombre: 'Marcelina',
      departamento: 'Finanzas',
      correo: 'marcelina@gmail.com',
      foto: '../../../assets/img/user.png',
    },
    {
      id: 4,
      nombre: 'Antonio',
      departamento: 'Recursos Humanos',
      correo: 'antonio@gmail.com',
      foto: '../../../assets/img/user.png',
    },
  ];

  // Obtener las tareas
  getUsuarios() {
    return this.usuarios;
  }

  usuarios1 = [
    {
      id: 1,
      nombre: 'Juan',
      departamento: 'Dirección General',
    },
    {
      id: 2,
      nombre: 'Clara',
      departamento: 'Administración',
    },
    {
      id: 3,
      nombre: 'Marcelina',
      departamento: 'Finanzas',
    },
    {
      id: 4,
      nombre: 'Antonio',
      departamento: 'Recursos Humanos',
    },
  ];

  // Obtener las usuario
  getUsuarios1() {
    return this.usuarios1;
  }

  // Borrar una usuario
  deleteUsuario(id: number) {
    this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
  }

  // Actualizar tarea
  updateUsuario(
    id: number,
    nuevoUsuario: {
      nombre?: string;
      departamento?: string;
      correo?: string;
      foto?: string;
    }
  ) {
    const index = this.usuarios.findIndex((usuario) => usuario.id === id);

    if (index !== -1) {
      this.usuarios[index] = {
        // Operador de propagación: copia todas las propiedades de la tarea original y sobrescribe las que se pasan en nuevaTarea
        ...this.usuarios[index],
        ...nuevoUsuario,
      };
    } else {
      console.error(`No se encontró la tarea con ID: ${id}`);
    }
  }

}
