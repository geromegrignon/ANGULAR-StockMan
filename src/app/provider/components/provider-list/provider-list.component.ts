import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { State } from '../../../shared/store';
import { Store, select } from '@ngrx/store';
import { providerListSelector } from '../../../shared/store/selectors/provider.selectors';
import { Provider } from '../../../shared/model/provider.model';
import { TryFetchProviders } from '../../../shared/store/actions/provider.actions';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {
  public providerColumns = ['name', 'siret'];
  public providerSource;
  public alertMessage: string;

  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new TryFetchProviders);
      this.store.pipe(select(providerListSelector)).subscribe(
        (providers: Provider[]) => this.providerSource = new MatTableDataSource(providers)
      );
      this.providerSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.providerSource.filter = filterValue;
  }


  }
