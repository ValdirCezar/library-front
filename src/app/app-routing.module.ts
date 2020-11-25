import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookReadComponent } from './views/book/book-read/book-read.component';
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
  },
  {
    path: 'category/:id/books',
    component: BookReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
