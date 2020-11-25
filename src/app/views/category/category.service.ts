import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:8080/api/categories'

  constructor(private http: HttpClient) { }

  findById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`)
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl)
  }

  createNewCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category);
  }

  updateCategory(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/${category.id}`
    console.log('chegou' + category.id)
    return this.http.put<Category>(url, category);
  }

  deleteById(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Category>(url);
  }
}
