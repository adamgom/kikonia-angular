export class Produkt {
  public typ: string;
  public sNazwa: string;
  public nazwa: string;
  public opis: string;
  public imgPath: string;

  constructor(typ: string, sNazwa: string, nazwa: string, opis: string, imgPath: string) {
    this.typ = typ;
    this.sNazwa = sNazwa;
    this.nazwa = nazwa;
    this.opis = opis;
    this.imgPath = imgPath;
  }
}