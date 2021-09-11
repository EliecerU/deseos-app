import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista []=[];

  constructor() {
    console.log('Servicio inicializado');
    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Mujeres que me quiero coger');

    this.listas.push(lista1,lista2);
    console.log(this.listas);
  }


}
