import {Component, OnInit} from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson('M', 'W', 'm@w', 20000),
    new SalesPerson('E', 'B', 'e@b', 30000),
    new SalesPerson('X', 'Y', 'x@y', 35000)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
