import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { State } from '../../../../shared/store';
import { Store } from '@ngrx/store';
import { Provider } from '../../../../shared/model/provider.model';

@Component({
  selector: 'app-provider-supply-list',
  templateUrl: './provider-supply-list.component.html',
  styleUrls: ['./provider-supply-list.component.css']
})
export class ProviderSupplyListComponent implements OnInit {
  public readonly supplyColumns = ['name', 'description', 'stock'];
  public supplySource;
  public alertMessage: string;

  @Input() provider: Provider;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    if (this.provider.supplyList) {
    this.supplySource = new MatTableDataSource(this.provider.supplyList);
    this.supplySource.paginator = this.paginator;
    this.supplySource.sort = this.sort;
    }
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.supplySource.filter = filterValue;
  }


  }

