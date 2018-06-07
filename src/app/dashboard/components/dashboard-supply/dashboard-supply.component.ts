import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Supply } from '../../../shared/model/supply.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { alertSuppliesSelector } from '../../../shared/store/selectors/supply.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-supply',
  templateUrl: './dashboard-supply.component.html',
  styleUrls: ['./dashboard-supply.component.css']
})
export class DashboardSupplyComponent implements OnInit, OnChanges {
  public alertColumns = ['name', 'stock', 'alert'];
  public alertSource: MatTableDataSource<Supply>;
  public alertMessage: string;

  @Input() onAlertSupplyList: Supply[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.alertSource = new MatTableDataSource(this.onAlertSupplyList);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.alertSource.filter = filterValue;
  }
}

