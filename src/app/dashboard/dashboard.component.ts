import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../shared/store';
import { RequestListSelector } from '../shared/store/selectors/request.selectors';
import { Request } from '../shared/model/request.model';
import { alertSuppliesSelector } from '../shared/store/selectors/supply.selectors';
import { Supply } from '../shared/model/supply.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public requestList$: Observable<Request[]> = this.store.pipe(select(RequestListSelector));
  public onAlertSupplyList$: Observable<Supply[]> = this.store.pipe(select(alertSuppliesSelector));

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
