import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../book.service';

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

  idCategory: string = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: BookService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.idCategory = this.route.snapshot.paramMap.get("id")!;
  }

  create(): void {
    this.service.createBook(this.idCategory!, this.book).subscribe((response) => {
      this.book = response
      this.router.navigate([`/category/${this.idCategory}/books`]);
      this.service.ShowSuccessCreateBook()
    }), console.error(
      this.router.navigate([`/category/${this.idCategory}/books`]),
      this.service.ShowErrorCreateBook()
    );
  }

  cancel(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.router.navigate([`/category/${id}/books`])
  }

}
