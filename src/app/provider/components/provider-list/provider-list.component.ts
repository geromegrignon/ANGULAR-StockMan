import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { State } from '../../../shared/store';
import { Store, select } from '@ngrx/store';
import { providerListSelector } from '../../../shared/store/selectors/provider.selectors';
import { Provider } from '../../../shared/model/provider.model';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit, OnChanges {
  public providerColumns = ['name', 'siret'];
  public providerSource;
  public alertMessage: string;

  @Input() providerList: Provider[];
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    this.providerSource = new MatTableDataSource(this.providerList);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.providerSource.filter = filterValue;
  }


  }
