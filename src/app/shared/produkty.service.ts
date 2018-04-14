import { Injectable, EventEmitter } from '@angular/core';
import { ListaProduktowService } from '../shared/listaProduktow.service';
import { Produkt } from '../shared/produkt.model';

@Injectable()
export class ProduktyService {

  przesyl = new EventEmitter<Produkt>();

  constructor(private listaProduktow: ListaProduktowService) {}
  wybor1() {

  }


}