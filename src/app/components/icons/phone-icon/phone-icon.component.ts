import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-phone-icon',
  templateUrl: './phone-icon.component.html',
  styleUrls: ['./phone-icon.component.css']
})
export class PhoneIconComponent implements OnInit {
  @Input() color = '';

  constructor() { }

  ngOnInit(): void {
  }

}
