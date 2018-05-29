import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userColumns = ['name', 'siret'];
  public userSource;
  public alertMessage: string;

  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    // this.store.dispatch(new TryFetchProviders);
    //   this.store.pipe(select(providerListSelector)).subscribe(
    //     (providers: Provider[]) => this.providerSource = new MatTableDataSource(providers)
    //   );
    //   this.providerSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.userSource.filter = filterValue;
  }


  }
