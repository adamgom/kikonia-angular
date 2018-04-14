import { Component, OnInit } from '@angular/core';
import { Produkt } from '../../shared/produkt.model';
import { ListaProduktowService } from '../../shared/listaProduktow.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  listaProduktow: Produkt[] = [];
  listaProduktowWyfiltrowana: Produkt[] = [];
  konkretnyProdukt: Produkt;
  wybranyTypuProduktu = 'spiwor';

  constructor(private produktyLista: ListaProduktowService) { }

  ngOnInit() {
    this.listaProduktow = this.produktyLista.pobierzProdukty();
    this.produktyLista.produktWybrany.subscribe(
      (produktWybrany: Produkt) => {this.konkretnyProdukt = produktWybrany;});
    this.wyborTypuProduktu(this.wybranyTypuProduktu);
  }

  wyborTypuProduktu(typ: string) {
    this.listaProduktowWyfiltrowana = [];
    this.konkretnyProdukt = null;
    this.wybranyTypuProduktu = typ;
    for (let i = 0 ; i < this.listaProduktow.length ; i++) {
      if ( this.listaProduktow[i].typ === this.wybranyTypuProduktu ) {
        this.listaProduktowWyfiltrowana.push(this.listaProduktow[i]);
      }
    }
  }
}
