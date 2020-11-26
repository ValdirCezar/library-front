import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  book: Book = {
    id: '',
    title: '',
    description: ''
  }

  idCategfory: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) { }

  ngOnInit(): void {
    this.idCategfory = this.route.snapshot.paramMap.get("idcat")!;
    this.book.id = this.route.snapshot.paramMap.get("id")!;

    this.service.findById(this.book.id).subscribe((subject) => {
      this.book = subject;
    })
  }

  update(): void {
    this.service.updateById(this.book).subscribe(() => {
      this.service.ShowSuccessUpdateBook();
    }), console.error(
      this.router.navigate([`/category/${this.idCategfory}/books`]),
      this.service.ShowErrorUpdateBook()
    );

  }

  cancel(): void {
    this.router.navigate([`/category/${this.idCategfory}/books`])
  }

}
