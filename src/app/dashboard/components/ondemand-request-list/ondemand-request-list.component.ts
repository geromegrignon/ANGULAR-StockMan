import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { TryFetchRequests } from '../../../shared/store/actions/request.actions';
import { RequestListSelector } from '../../../shared/store/selectors/request.selectors';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ondemand-request-list',
  templateUrl: './ondemand-request-list.component.html',
  styleUrls: ['./ondemand-request-list.component.css']
})
export class OndemandRequestListComponent implements OnInit {
  public requestColumns = ['supplyName', 'quantity', 'deliveryDate', 'userName'];
  public requestSource;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new TryFetchRequests());
    this.store.pipe(select(RequestListSelector)).subscribe(
      data => this.requestSource = new MatTableDataSource(data)
    );
  }

}
