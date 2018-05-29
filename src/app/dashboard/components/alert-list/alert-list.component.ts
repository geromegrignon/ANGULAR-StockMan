import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { State } from '../../../shared/store';
import { Store, select } from '@ngrx/store';
import { alertSuppliesSelector } from '../../../shared/store/selectors/supply.selectors';
import { TryFetchAlertSupplies } from '../../../shared/store/actions/supply.actions';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  public alertColumns = ['name', 'stock', 'alert'];
  public alertSource;
  public alertMessage: string;

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new TryFetchAlertSupplies());
    this.store.pipe(select(alertSuppliesSelector)).subscribe(
      data => {
        this.alertSource = new MatTableDataSource(data);
      }
      // this.alertSource.sort = this.sort;
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.alertSource.filter = filterValue;
  }
}
