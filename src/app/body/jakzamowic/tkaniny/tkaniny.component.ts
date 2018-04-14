import { Component, OnInit } from '@angular/core';
import { Material } from '../../../shared/material.model';
import { ListaTkaninService } from '../../../shared/listaTkanin.service';

@Component({
  selector: 'app-tkaniny',
  templateUrl: './tkaniny.component.html',
  styleUrls: ['./tkaniny.component.css']
})

export class TkaninyComponent implements OnInit {
  tkaniny: Material[] = [];
  liczObrWWierszuTabela: number[] = [];
  liczObrWWierszu: number = 6;
  dlListTkan: number = this.tkaninyLista.pobierzTkaniny().length - 1;

  constructor(private tkaninyLista: ListaTkaninService) { }

  ngOnInit() {
    this.tkaniny = this.tkaninyLista.pobierzTkaniny();
    for (let i = 0 ;  i < this.liczObrWWierszu ; i++) { this.liczObrWWierszuTabela.push(i); }
    console.log(this.dlListTkan);
  }
}
