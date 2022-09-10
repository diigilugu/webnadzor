import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  startProject$ = new BehaviorSubject(false);

  constructor() { }

  startProject(): void {
    setTimeout(() => {
      this.startProject$.next(true);
    }, 1500);
  }
}
