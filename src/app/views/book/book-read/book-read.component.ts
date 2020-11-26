import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../category/category.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  category: Category = {
    id: '',
    name: ''
  }

  books: Book[] = []

  displayedColumns = ['id', 'name', 'action', 'read'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BookService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.findcategory();
    this.findAllBooks();
  }

  findcategory(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.categoryService.findById(id!).subscribe(response => {
      this.category = response;
    })
  }

  navigateToBookCreate(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.router.navigate([`books/${id}/create`])
  }

  findAllBooks(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.service.findAllBooks(id!).subscribe(response => {
      this.books = response;
    })
  }

}
