import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  size: number;

  constructor() { }

  ngOnInit() {
    this.size = window.innerWidth;
  }
}
