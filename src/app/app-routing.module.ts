import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/layouts/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // all authentication based routes go here
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
