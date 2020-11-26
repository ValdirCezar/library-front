import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './views/book/book-create/book-create.component';
import { BookDeleteComponent } from './views/book/book-delete/book-delete.component';
import { BookReadComponent } from './views/book/book-read/book-read.component';
import { BookUpdateComponent } from './views/book/book-update/book-update.component';
import { ReadBookComponent } from './views/book/read-book/read-book.component';
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
  },
  {
    path: 'books/:id/create',
    component: BookCreateComponent
  },
  {
    path: 'category/:idcat/books/delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'category/:idcat/books/update/:id',
    component: BookUpdateComponent
  },
  {
    path: 'category/:idcat/books/read-book/:id',
    component: ReadBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
