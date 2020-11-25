import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    name: ''
  }

  constructor(
    private service: CategoryService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.createNewCategory(this.category).subscribe(() => {
      this.router.navigate(['/categories'])
      this.openMessageCreateSuccess()
    }), console.error(
      this.router.navigate(['/categories']),
      this.openMessageCreateError()
    );

  }

  cancel(): void {
    this.router.navigate(['/categories'])
  }

  openMessageCreateSuccess(): void {
    this._snackBar.open('Created successful category', 'close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  openMessageCreateError(): void {
    this._snackBar.open('Ohh, something went wrong when creating category', 'close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

}
