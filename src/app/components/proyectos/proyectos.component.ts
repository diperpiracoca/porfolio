import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../../types/types'


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})

export class ProyectosComponent implements OnInit {
   ngOnInit(): void {
    this.proyectos=[
      {estado:'EN DESARROLLO', titulo:'Spot',
      descripcion:'Red social dirigida a skaters y lugares para practicar skate',
      imagenes:['../../assets/images/logo.svg','../../assets/images/Spot_imagen.png'],
      RedesSociales:[{icono:'../assets/icons/github-logo.svg',nombre: 'Github', link: 'https://github.com/diperpiracoca'}]},
      {estado:'EN DESARROLLO', titulo:'devHelper',
      descripcion:'Aplicacion de escritorio para el desarrollo de aplicaciones.',
      imagenes:['../../assets/images/logo.svg','../../assets/images/Spot_imagen.png'],
      RedesSociales:[{icono:'../assets/icons/github-logo.svg',nombre: 'Github', link: 'https://github.com/diperpiracoca'}]},
      {estado:'EN PRODUCCION', titulo:'LoopersMusic',
      descripcion:'aplicacion movil para hacer looping',
      imagenes:['../../assets/images/logo.svg','../../assets/images/Spot_imagen.png'],
      RedesSociales:[{icono:'../assets/icons/github-logo.svg',nombre: 'Github', link: 'https://github.com/diperpiracoca'}]},
      {estado:'TERMINADO', titulo:'API REST',
      descripcion:'API que devuelve informacion de musica',
      imagenes:['../../assets/images/logo.svg','../../assets/images/Spot_imagen.png'],
      RedesSociales:[{icono:'../assets/icons/github-logo.svg',nombre: 'Github', link: 'https://github.com/diperpiracoca'}]}];
   }
   proyectos: Proyecto[]=[];
  
}
