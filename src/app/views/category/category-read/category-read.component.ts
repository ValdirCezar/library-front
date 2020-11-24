import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = [{
    id: '1',
    name: 'Teste'
  }]

  displayedColumns = ['id', 'name', 'action'];

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
