import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Supply } from '../../../../shared/model/supply.model';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements OnInit {
  public orderRequestColumns = ['deliveryDate', 'quantity']; // add status
  public orderRequestSource;

  @ViewChild(MatSort) sort: MatSort;
  @Input() supply: Supply;

  constructor() { }

  ngOnInit() {
    this.orderRequestSource = new MatTableDataSource(this.supply.orderRequestList);
    this.orderRequestSource.sort = this.sort;
  }

}
