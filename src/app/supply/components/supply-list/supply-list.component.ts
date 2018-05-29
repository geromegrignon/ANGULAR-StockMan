import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Supply } from '../../../shared/model/supply.model';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';
import { Provider } from '../../../shared/model/provider.model';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.css']
})
export class SupplyListComponent implements OnInit {
  public supplyColumns = ['name', 'description', 'stock', 'alerte'];
  public supplySource;
  public alertMessage: string;

  @ViewChild(MatSort) sort: MatSort;

  @Input() provider: Provider;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
      this.supplySource = new MatTableDataSource(this.provider.supplyList);
      this.supplySource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.supplySource.filter = filterValue;
  }

  alert(supply: Supply) {
    if (supply.unitsInStock < supply.alertStock) {
      this.alertMessage = 'stock à renouveler';
      return true;
    } else {
      return false;
    }

  }
}
