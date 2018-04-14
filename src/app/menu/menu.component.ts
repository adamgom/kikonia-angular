import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  skladnikMenu: string[];

  constructor(private sklMenu: MenuService) { }

  ngOnInit() {
    this.skladnikMenu = this.sklMenu.pobierzMenu();
  }

}
