import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Produkt } from '../../../shared/produkt.model';
import { ListaProduktowService } from '../../../shared/listaProduktow.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent implements OnInit {
  @Input() elementListy: Produkt;

  constructor(private produktyLista: ListaProduktowService) { }

  ngOnInit() {
  }

  wyborProduktu() {
    this.produktyLista.produktWybrany.emit(this.elementListy);
  }
}
