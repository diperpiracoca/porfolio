import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrete',
  templateUrl: './carrete.component.html',
  styleUrls: ['./carrete.component.scss'],
})

export class CarreteComponent implements OnInit {
  @Input() images: string[] = [];
  image = '';
  indice = 0;
  intervalo: any | undefined;

  ngOnInit(): void {
    this.image = this.images[this.indice];
    this.crearLoop();
  }
  derecho() {
    if (this.images.length - 1 > this.indice) {
      this.indice = this.indice + 1;
    } else {
      this.indice = 0;
    }
    this.cambio();
  }

  izquierdo() {
    if (this.indice == 0) {
      this.indice = this.images.length - 1
    } else {
      this.indice = this.indice - 1;
    }
    this.cambio();
  }


  cambio() {
    this.crearLoop();
    this.image = this.images[this.indice];
  }

  swipe($event: any) {
    $event == 'swipeleft' ? this.izquierdo() : this.derecho();
  }

  crearLoop() {
    if (this.images.length > 1)
      clearInterval(this.intervalo);
    this.intervalo = setInterval(() => {
      this.derecho();
    }, 10000);
  }

}
