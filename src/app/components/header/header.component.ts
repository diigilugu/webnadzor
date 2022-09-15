import {animate, state, style, transition, trigger} from '@angular/animations';
import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('widthGrow', [
      state('closed', style({
        width: 0,
      })),
      state('open', style({
        width: 250
      })),
      transition('* => *', animate(450))
    ])]
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidebarBlock') sidebarBlock: ElementRef | undefined;
  @ViewChild('top') pageTop: ElementRef | undefined;
  sidebar = false;
  state = "closed";
  mobileWidth = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: any): void {
    if (!this.sidebarBlock?.nativeElement.contains(event.target)) {
      this.sidebar = false;
      if (document.body.style.overflow === 'hidden') {
        this.state == "closed" ? this.state = "open" : this.state = "closed";
        document.body.style.overflow = 'auto';
      }
    }
  }

  openSidebar() {
    this.state == "closed" ? this.state = "open" : this.state = "closed";
    this.sidebar = true;
    document.body.style.overflow = 'hidden';
  }

  closeSidebar() {
    this.state == "open" ? this.state = "closed" : this.state = "open";
    this.sidebar = false;
    document.body.style.overflow = 'auto';
  }

  scrollToTop() {
    this.pageTop?.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
