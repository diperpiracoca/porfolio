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
      imagenes:['../../assets/images/Spot_imagen.png'],
      RedesSociales:[{icono:'../assets/icons/github-logo.svg', nombre: 'Github', link: 'https://github.com/diperpiracoca/SPOT'},
        {icono:'../assets/icons/instagram.svg', nombre: 'Instagram', link: 'https://www.instagram.com/spot.skate_app/'}]},
      {estado:'EN DESARROLLO', titulo:'DevHelper',
      descripcion:'Aplicacion de escritorio para el desarrollo de aplicaciones.',
      imagenes:['../../assets/images/DevHelper.png'],
      RedesSociales:[{icono:'../assets/icons/github-logo.svg',nombre: 'Github', link: 'https://github.com/diperpiracoca/DevHelper'},
        {icono:'../assets/icons/figma-logo.svg',nombre: 'Figma', link: 'https://www.figma.com/design/7ts8wiOfzLFndoeHpIG90W/HelperDev?node-id=0-1&t=LQHebjS75Qdqr4XV-0'}]},
      {estado:'EN DESARROLLO', titulo:'DevFormFx',
      descripcion:'Libreria de formularios usando JavaFx',
      imagenes:['../../assets/images/DevFormFX.png'],
      RedesSociales:[{icono:'../assets/icons/github-logo.svg',nombre: 'Github', link: 'https://github.com/diperpiracoca/DevFormFx'}]},
      {estado:'EN DESARROLLO', titulo:'Web de DICSSTARTUP',
        descripcion:'LandingPage donde explica el proyecto',
        imagenes:['../../assets/images/web-dicsstartup.png'],
        RedesSociales:[{icono:'../assets/icons/github-logo.svg',nombre: 'Github', link: 'https://github.com/diperpiracoca/landingPage'},
          {icono:'../assets/icons/figma-logo.svg',nombre: 'Figma', link: 'https://www.figma.com/design/T2JbMAIEqcPMwa9Xwp6BhH/DICS?node-id=0-1&t=zEy4qiGV3dNH6pSQ-0'},
          {icono:'../assets/icons/arrow_outward.svg',nombre: 'Web', link: 'https://dicsstartup.com'}
        ]}];
   }
   proyectos: Proyecto[]=[];
  
}
