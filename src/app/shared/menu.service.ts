export class MenuService {
private skladnikMenu: string[] = [
    'Nasze przykładowe produkty', 'Jak zamowic', 'O firmie / kontkat'
  ];

  // private skladnikMenu: string[] = [
  //   'motylki', 'kocyki', 'wkładki', 'śpiwory', 'ochraniacze', 'inne'
  // ];

  pobierzMenu() {
    return this.skladnikMenu.slice();
  }
}