import { Component, OnInit, Input } from '@angular/core';
import { Produkt } from '../../../shared/produkt.model';
// import { ProduktyService } from '../../../shared/produkty.service';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.css']
})
export class DetaleComponent implements OnInit {
  @Input() konkretnyProduktWybrany: Produkt;

  constructor(
              // private wybranyProd: ProduktyService
            ) { }

  ngOnInit() {
  }

}
