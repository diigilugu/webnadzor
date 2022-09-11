import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {SitePageComponent} from "./pages/site-page/site-page.component";
import {LicensePageComponent} from "./pages/license-page/license-page.component";
import {OrganizationPageComponent} from "./pages/organization-page/organization-page.component";
import {EgisPageComponent} from "./pages/egis-page/egis-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'site', component: SitePageComponent },
  { path: 'contacts', component: SitePageComponent },
  { path: 'organizations', component: OrganizationPageComponent },
  { path: 'license', component: LicensePageComponent },
  { path: 'egisz', component: EgisPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
