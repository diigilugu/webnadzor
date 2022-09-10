import { Component, OnInit } from '@angular/core';
import {MainPageService} from "./services/main-page.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webnadzor';
  public isStartedProject$ = this.mps.startProject$;

  constructor(private mps: MainPageService) {
  }

  ngOnInit(): void {
    this.mps.startProject();
  }
}
