import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  book: Book = {
    id: '',
    title: '',
    description: ''
  }

  idCategory: string = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BookService
  ) { }

  ngOnInit(): void {
    this.idCategory = this.route.snapshot.paramMap.get("idcat")!;
    this.book.id = this.route.snapshot.paramMap.get("id")!;

    this.service.findById(this.book.id).subscribe((subject) => {
      this.book = subject;
    })
  }

  close(): void {
    this.router.navigate([`/category/${this.idCategory}/books`]);
  }

}
