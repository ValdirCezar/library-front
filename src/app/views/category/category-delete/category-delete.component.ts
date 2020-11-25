import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category = {
    id: '',
    name: ''
  }

  constructor(
    private service: CategoryService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.service.findById(id!).subscribe(subject => {
      this.category = subject
    })
  }

  delete(): void {
    this.service.deleteById(this.category.id!).subscribe(() => {
      this.openMessageDeletedSuccess()
    }), console.error(
      this.openMessageDeletedError()
    );
    
  }

  cancel(): void {
    this.router.navigate(['/categories'])
  }

  openMessageDeletedSuccess(): void {
    this.router.navigate(['/categories'])
    this._snackBar.open('Deleted successful category', 'close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  openMessageDeletedError(): void {
    this.router.navigate(['/categories'])
    this._snackBar.open('Something went wrong when delete category', 'close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

}
