import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: '',
    icon: '',
    routeUrl: ''
  });

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(value: HeaderData) {
    this._headerData.next(value);
  }

  constructor() { }
}
