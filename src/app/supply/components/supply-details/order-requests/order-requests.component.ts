import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Supply } from '../../../../shared/model/supply.model';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderRequestsComponent implements OnInit {
  public readonly orderRequestColumns = ['deliveryDate', 'quantity']; // add status
  public orderRequestSource;

  @ViewChild(MatSort) sort: MatSort;
  @Input() supply: Supply;

  constructor() { }

  ngOnInit() {
    this.orderRequestSource = new MatTableDataSource(this.supply.requestList);
    this.orderRequestSource.sort = this.sort;
  }

}
