import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FurnPageComponent } from './furn-page/furn-page.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'furn/:id', component:FurnPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
