import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhoneIconComponent } from './components/icons/phone-icon/phone-icon.component';
import { GreenPointComponent } from './components/icons/green-point/green-point.component';
import { PlusButtonComponent } from './components/icons/plus-button/plus-button.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/main-page/about-us/about-us.component';
import { WebnadzorFlowComponent } from './components/main-page/webnadzor-flow/webnadzor-flow.component';
import { WhyUsComponent } from './components/main-page/why-us/why-us.component';
import { QuestionsComponent } from './components/main-page/questions/questions.component';
import { ImagesComponent } from './components/main-page/images/images.component';
import { ContactUsComponent } from './components/main-page/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { SitePageComponent } from './pages/site-page/site-page.component';
import { TriangleComponent } from './components/icons/triangle/triangle.component';
import { LicensePageComponent } from './pages/license-page/license-page.component';
import { OrganizationPageComponent } from './pages/organization-page/organization-page.component';
import { EgisPageComponent } from './pages/egis-page/egis-page.component';
import { SeePageComponent } from './pages/see-page/see-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';

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
    MainPageComponent,
    SitePageComponent,
    TriangleComponent,
    LicensePageComponent,
    OrganizationPageComponent,
    EgisPageComponent,
    SeePageComponent,
    EducationPageComponent
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
