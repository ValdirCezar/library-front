import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  book: Book = {
    id: '',
    title: ''
  }

  idCategory: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService) { }

  ngOnInit(): void {
    this.idCategory = this.route.snapshot.paramMap.get("idcat")!
    const id = this.route.snapshot.paramMap.get("id")!
    this.service.findById(id).subscribe((response) => {
      this.book = response;
    })
  }

  delete(): void {
    this.service.deleteById(this.book.id!).subscribe(() => {
      this.router.navigate([`/category/${this.idCategory}/books`]);
      this.service.ShowSuccessDeleteBook();
    }), console.error(
      this.service.ShowErrorCreateBook()
    );
    
  }

  cancel(): void {
    this.router.navigate([`/category/${this.idCategory}/books`]);
  }

}
