import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {SitePageComponent} from "./pages/site-page/site-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'site', component: SitePageComponent },
  { path: 'contacts', component: SitePageComponent },
  { path: 'organizations', component: SitePageComponent },
  { path: 'license', component: SitePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
