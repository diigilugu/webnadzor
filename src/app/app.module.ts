import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneIconComponent } from './components/icons/phone-icon/phone-icon.component';
import { GreenPointComponent } from './components/icons/green-point/green-point.component';
import { PlusButtonComponent } from './components/icons/plus-button/plus-button.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WebnadzorFlowComponent } from './components/webnadzor-flow/webnadzor-flow.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ImagesComponent } from './components/images/images.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PhoneIconComponent,
    GreenPointComponent,
    PlusButtonComponent,
    HeaderComponent,
    AboutUsComponent,
    WebnadzorFlowComponent,
    WhyUsComponent,
    QuestionsComponent,
    ImagesComponent,
    ContactUsComponent,
    FooterComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
