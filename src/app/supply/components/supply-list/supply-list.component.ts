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
  public supplyColumns = ['name', 'description', 'stock', 'alert'];
  public supplySource;
  public alertMessage: string = 'stock à renouveler';

  @Input() provider: Provider;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<State>) { }

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
      return true;
    } else {
      return false;
    }
  }
}
