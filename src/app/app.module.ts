import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneIconComponent } from './components/icons/phone-icon/phone-icon.component';
import { GreenPointComponent } from './components/icons/green-point/green-point.component';
import { PlusButtonComponent } from './components/icons/plus-button/plus-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneIconComponent,
    GreenPointComponent,
    PlusButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
