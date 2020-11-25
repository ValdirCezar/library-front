import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryCreateComponent } from './views/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './views/category/category-delete/category-delete.component';
import { CategoryReadComponent } from './views/category/category-read/category-read.component';
import { CategoryUpdateComponent } from './views/category/category-update/category-update.component';
import { HomeComponent } from './views/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryReadComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'category/update/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'category/delete/:id',
    component: CategoryDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
