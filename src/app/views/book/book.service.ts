import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  findAllBooks(id: string): Observable<Book[]> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Book[]>(url);
  }

}
