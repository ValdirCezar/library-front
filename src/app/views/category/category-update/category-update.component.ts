import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  category: Category = {
    name: ''
  }

  constructor(
    private service: CategoryService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.service.findById(id!).subscribe(response => {
      this.category = response;
    })
    
  }

  update(): void {
    this.service.updateCategory(this.category).subscribe(() => {
      this.router.navigate(['/categories'])
      this.openMessageUpdatedSuccess();
    }), console.error(
      this.router.navigate(['/categories']),
      this.openMessageUpdateError()
    );
    
  }

  cancel(): void {
    this.router.navigate(['/categories'])
  }

  openMessageUpdatedSuccess(): void {
    this._snackBar.open('Update successful category', 'close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  openMessageUpdateError(): void {
    this._snackBar.open('Something went wrong when update category', 'close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
