import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryReadComponent } from './views/category/category-read/category-read.component';
import { HomeComponent } from './views/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
