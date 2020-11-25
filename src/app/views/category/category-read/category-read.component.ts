import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = []
  categorie: Category = {
    id: '',
    name: ''
  }

  displayedColumns = ['id', 'name', 'action', 'views'];

  constructor(
    private service: CategoryService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.findAllCategoires();
  }

  findAllCategoires(): void {
    this.service.getAllCategories().subscribe((response) => {
      this.categories = response;
    })
  }

  navigateToCategoryCreate(): void {
    this.router.navigate(["categories/create"])
  }

}
