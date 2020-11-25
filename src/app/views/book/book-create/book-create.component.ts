import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = {
    id: '',
    title: '',
    description: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  create(): void {

  }

  cancel(): void {
    
  }

}
