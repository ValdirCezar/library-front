import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read',
  templateUrl: './book-read.component.html',
  styleUrls: ['./book-read.component.css']
})
export class BookReadComponent implements OnInit {

  books: Book[] = []

  displayedColumns = ['id', 'name', 'action'];

  constructor(
    private route: ActivatedRoute,
    private service: BookService) { }

  ngOnInit(): void {
    this.findAllBooks();
  }

  navigateToBookCreate(): void {

  }

  findAllBooks(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.service.findAllBooks(id!).subscribe(response => {
      this.books = response;
    })
  }

}
