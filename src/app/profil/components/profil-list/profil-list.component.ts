import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent implements OnInit {
  public profilColumns = ['username', 'email', 'firstName', 'lastName'];
  public profilSource = undefined;
  public error$: Observable<string>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    /*
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
      */
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.profilSource.filter = filterValue;
  }
}
