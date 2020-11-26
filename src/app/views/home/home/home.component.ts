import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    this.headerService.headerData = {
      title: 'My Bookstore',
      icon: 'home',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
  }

}
