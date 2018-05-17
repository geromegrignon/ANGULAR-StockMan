import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SupplyService } from '../../shared/services/supply.service';
import { Observable } from 'rxjs';
import { Supply } from '../../../shared/model/supply.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { resultSuppliesSelector, errorSuppliesSelector } from '../../shared/store/supply.selectors';
import { map, tap } from 'rxjs/operators';
import { TryFetchSupplies, FetchSuppliesError } from '../../shared/store/supply.actions';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrls: ['./supply-list.component.css']
})
export class SupplyListComponent implements OnInit {
  public supplyColumns = ['name', 'description', 'stock'];
  public supplySource = undefined;
  public test;
  public error$: Observable<string>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private supplyService: SupplyService,
    private store: Store<State>
  ) { }

  ngOnInit() {
      this.store.pipe(
        select(resultSuppliesSelector)
      ).subscribe(
        (supplies: Supply[]) => {
          this.supplySource = new MatTableDataSource(supplies);
          this.supplySource.paginator = this.paginator;
          this.supplySource.sort = this.sort;
        }
      );
      this.store.dispatch(new TryFetchSupplies());
      this.error$ = this.store.pipe(select(errorSuppliesSelector));
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.supplySource.filter = filterValue;
  }
}
