import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  findAllBooks(id: string): Observable<Book[]> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Book[]>(url);
  }

  createBook(id: string, book: Book): Observable<Book> {
    const url = `${this.baseUrl}/${id}`
    return this.http.post<Book>(url, book);
  }

  findById(id: string): Observable<Book>{
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get<Book>(url);
  }

  deleteById(id: string): Observable<void>{
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete<void>(url)
  }

  updateById(book: Book): Observable<Book>{
    const url = `${this.baseUrl}/books/${book.id}`
    return this.http.put<Book>(url, book);
  }

  ShowSuccessCreateBook(): void {
    this._snackBar.open('Book successfully created!', 'close', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ShowErrorCreateBook(): void {
    this._snackBar.open('Error creating book! Try later :)', 'close', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ShowSuccessDeleteBook(): void {
    this._snackBar.open('Book successfully deleted!', 'close', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ShowSuccessUpdateBook(): void {
    this._snackBar.open('Book successfully updated!', 'close', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  ShowErrorUpdateBook(): void {
    this._snackBar.open('Error update book! Try later :)', 'close', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

}
