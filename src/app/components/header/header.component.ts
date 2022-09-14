import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidebarBlock') sidebarBlock: ElementRef | undefined;
  sidebar = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.sidebarBlock?.nativeElement.contains(event.target)) {
      // clicked outside => close dropdown list
      this.sidebar = false;
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
      }
    }
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
