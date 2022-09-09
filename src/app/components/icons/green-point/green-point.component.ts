import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-green-point',
  templateUrl: './green-point.component.html',
  styleUrls: ['./green-point.component.css']
})
export class GreenPointComponent implements OnInit {
  @Input() star: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
