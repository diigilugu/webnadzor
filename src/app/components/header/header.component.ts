import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebar = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.sidebar = true;
    document.body.style.overflow = 'hidden';
  }

  closeSidebar() {
    this.sidebar = false;
    document.body.style.overflow = 'auto';
  }
}
