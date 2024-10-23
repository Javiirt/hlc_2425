import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  anio: number = 0;
  diferencia: string = "Introduzca un año para ver cuanto tiempo de diferencia hay hasta el año actual";

  constructor() { }

  calculaDiferencia() {
    const anioActual = new Date().getFullYear();
    if (this.anio == null) {
      this.anio = 0;
    }
    if (this.anio < anioActual) {
      this.diferencia = `Han pasado ${anioActual - this.anio} años desde el año ${this.anio}`;
    } else if (this.anio > anioActual) {
      this.diferencia = `Faltan ${this.anio - anioActual} años para llegar al año ${this.anio}`;
    } else {
      this.diferencia = `Estamos en el año ${this.anio}`;
    }
    //}
  }
}