import { Component, OnInit } from '@angular/core';
import { Material } from '../../../shared/material.model';
import { ListaDresowkiService } from '../../../shared/listaDresowki.service';

@Component({
  selector: 'app-dresowka',
  templateUrl: './dresowka.component.html',
  styleUrls: ['./dresowka.component.css']
})

export class DresowkaComponent implements OnInit {
  dresowka: Material[] = [];
  liczObrWWierszuTabela: number[] = [];
  liczObrWWierszu: number = 6;
  dlListDres: number = this.dresowkaLista.pobierzDersowke().length - 1;

  constructor(private dresowkaLista: ListaDresowkiService) { }

  ngOnInit() {
    this.dresowka = this.dresowkaLista.pobierzDersowke();
    for (let i = 0 ;  i < this.liczObrWWierszu ; i++) { this.liczObrWWierszuTabela.push(i); }
  }
}
