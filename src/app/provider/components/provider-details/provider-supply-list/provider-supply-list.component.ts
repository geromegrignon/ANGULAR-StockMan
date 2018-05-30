import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { State } from '../../../../shared/store';
import { Store } from '@ngrx/store';
import { Provider } from '../../../../shared/model/provider.model';

@Component({
  selector: 'app-provider-supply-list',
  templateUrl: './provider-supply-list.component.html',
  styleUrls: ['./provider-supply-list.component.css']
})
export class ProviderSupplyListComponent implements OnInit {
  public supplyColumns = ['name', 'description', 'stock'];
  public supplySource;
  public alertMessage: string;

  @Input() provider: Provider;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.supplySource = new MatTableDataSource(this.provider.supplyList);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.supplySource.filter = filterValue;
  }


  }

