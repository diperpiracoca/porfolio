import { Component } from '@angular/core';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.scss']
})

export class TrayectoriaComponent {
  listExp: any[] = [{
    fecha: '2021 - 2023 ',
    titulo: 'Ciclo formativo de grado superior de desarrollo de aplicaciones multiplataforma',
    lugar: 'Cantabria, España',
    organizacion: 'IES Augusto González de Linares', icono: 'school',
    tareas: ['Manejo de base de datos y sistemas informaticos. ',
      ' Programación y preparacion de Entornos de desarrollo.',
      ' Lenguajes de marca y desarrollo de Interfaces.']
  },
  {
    fecha: '2023 - actualmente', titulo: 'Programador Java con base de datos Oracle SQL',
    lugar: 'Cantabria, España', organizacion: 'AXPE Consulting Cantabria', icono: 'work',
    tareas: ['Desarrollo de aplicaciones web y móviles con el uso de Spring MVC y Ionic.',
      'Integración con bases de datos Oracle: Consultas SQL complejas y eficientes.',
      'Mantenimiento y soporte dando resolución de incidencias y errores.']
  }];
}
