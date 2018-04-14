import { EventEmitter } from '@angular/core';
import { Produkt } from '../shared/produkt.model';

export class ListaProduktowService {

  produktWybrany = new EventEmitter<Produkt>();

  private listaProduktow: Produkt[] = [
    {typ: 'akcesoria', sNazwa: 'Torba na ubrania / buty', nazwa: '', opis: '', imgPath: 'z(1).jpg'},
    {typ: 'mix', sNazwa: 'Kocyk i poduszka', nazwa: '', opis: '', imgPath: 'z(2).jpg'},
    {typ: 'mix', sNazwa: 'Kocyk i poduszka', nazwa: '', opis: '', imgPath: 'z(3).jpg'},
    {typ: 'mix', sNazwa: 'Kocyk i poduszka', nazwa: '', opis: '', imgPath: 'z(4).jpg'},
    {typ: 'mix', sNazwa: 'Kocyk i poduszka', nazwa: '', opis: '', imgPath: 'z(5).jpg'},
    {typ: 'kocyk', sNazwa: 'Kocyk', nazwa: '', opis: '', imgPath: 'z(6).jpg'},
    {typ: 'mix', sNazwa: 'Poduszka antywstrząsowa "motylek" i kocyk', nazwa: '', opis: '', imgPath: 'z(7).jpg'},
    {typ: 'poduszka', sNazwa: 'Poduszki', nazwa: '', opis: '', imgPath: 'z(8).jpg'},
    {typ: 'kocyk', sNazwa: 'Kocyk', nazwa: '', opis: '', imgPath: 'z(9).jpg'},
    {typ: 'kocyk', sNazwa: 'Kocyk', nazwa: '', opis: '', imgPath: 'z(10).jpg'},
    {typ: 'wkladka', sNazwa: 'Wkładka do fotelika', nazwa: '', opis: '', imgPath: 'z(11).jpg'},
    {typ: 'mix', sNazwa: 'Wkładka do wózka i poduszka antywstrząsowa "motylek" ', nazwa: '', opis: '', imgPath: 'z(12).jpg'},
    {typ: 'akcesoria', sNazwa: 'Organizer na łóżeczko', nazwa: '', opis: '', imgPath: 'z(13).jpg'},
    {typ: 'kocyk', sNazwa: 'Kocyk', nazwa: '', opis: '', imgPath: 'z(14).jpg'},
    {typ: 'mix', sNazwa: 'Wkładka do wózka i poduszka antywstrząsowa "motylek" ', nazwa: '', opis: '', imgPath: 'z(15).jpg'},
    {typ: 'poduszka', sNazwa: 'Poduszka antywstrząsowa "motylek" ', nazwa: '', opis: '', imgPath: 'z(16).jpg'},
    {typ: 'mix', sNazwa: 'Płaska poduszka, kocyk i ochraniacz na łóżeczko', nazwa: '', opis: '', imgPath: 'z(17).jpg'},
    {typ: 'poduszka', sNazwa: 'Poduszka antywstrząsowa "motylek" ', nazwa: '', opis: '', imgPath: 'z(18).jpg'},
    {typ: 'mix', sNazwa: 'Wkładka do wózka i poduszka antywstrząsowa "motylek" ', nazwa: '', opis: '', imgPath: 'z(19).jpg'},
    {typ: 'zabawka', sNazwa: 'Kostka sensoryczna', nazwa: '', opis: '', imgPath: 'z(20).jpg'},
    {typ: 'zabawka', sNazwa: 'Kostka sensoryczna', nazwa: '', opis: '', imgPath: 'z(21).jpg'},
    {typ: 'mix', sNazwa: 'Wkładka do wózka, poduszka antywstrząsowa "motylek" i ochraniacze na pasy', nazwa: '', opis: '', imgPath: 'z(22).jpg'},
    {typ: 'akcesoria', sNazwa: 'Ochraniacze na pasy', nazwa: '', opis: '', imgPath: 'z(23).jpg'},
    {typ: 'akcesoria', sNazwa: 'Ochraniacz na pałąk do wózka', nazwa: '', opis: '', imgPath: 'z(24).jpg'},
    {typ: 'mix', sNazwa: 'Śpiwór zimowy do wózka i poduszka antywstrząsowa "motylek"', nazwa: '', opis: '', imgPath: 'z(25).jpg'},
    {typ: 'zabawka', sNazwa: 'Zabawki - pluszaki', nazwa: '', opis: '', imgPath: 'z(26).jpg'},
    {typ: 'spiwor', sNazwa: 'Śpiwór z kapturem do gondoli / sanek', nazwa: '', opis: '', imgPath: 'z(27).jpg'},
    {typ: 'zabawka', sNazwa: 'Zabawki - metkowce', nazwa: '', opis: '', imgPath: 'z(28).jpg'},
    {typ: 'mix', sNazwa: 'Mufka na wózek i poduszka antywstrząsowa "motylek"', nazwa: '', opis: '', imgPath: 'z(29).jpg'},
    {typ: 'akcesoria', sNazwa: 'Ochraniacz na łóżeczko', nazwa: '', opis: '', imgPath: 'z(30).jpg'},
    {typ: 'kocyk', sNazwa: 'Kocyk', nazwa: '', opis: '', imgPath: 'z(31).jpg'},
    {typ: 'kocyk', sNazwa: 'Kocyk', nazwa: '', opis: '', imgPath: 'z(32).jpg'},
    {typ: 'spiwor', sNazwa: 'Śpiwór z kapturem do gondoli / sanek', nazwa: '', opis: '', imgPath: 'z(33).jpg'},
    {typ: 'akcesoria', sNazwa: 'Mufka na wózek', nazwa: '', opis: '', imgPath: 'z(34).jpg'},
    {typ: 'zabawka', sNazwa: 'Przytulanka szmaciana', nazwa: '', opis: '', imgPath: 'z(35).jpg'},
    {typ: 'mix', sNazwa: 'Ochraniacz na łóżeczko i kostka sensoryczna', nazwa: '', opis: '', imgPath: 'z(36).jpg'},
    {typ: 'poduszka', sNazwa: 'Poduszka antywstrząsowa "motylek"', nazwa: '', opis: '', imgPath: 'z(37).jpg'},
    {typ: 'poduszka', sNazwa: 'Poduszka antywstrząsowa "motylek"', nazwa: '', opis: '', imgPath: 'z(38).jpg'}
  ];

  pobierzProdukty() {
    return this.listaProduktow.slice();
  }

}
