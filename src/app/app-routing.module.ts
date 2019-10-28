import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GolferSectionComponent} from "./components/golfer-section/golfer-section.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'golfer', component: GolferSectionComponent},
  {path: 'about', component: AboutComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
