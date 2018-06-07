import { Component, OnInit, Input, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { Observable } from 'rxjs';
import { RequestListSelector } from '../../../shared/store/selectors/request.selectors';
import { Request } from '../../../shared/model/request.model';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { DashboardRequestsDetailsComponent } from './dashboard-requests-details/dashboard-requests-details.component';

@Component({
  selector: 'app-dashboard-requests',
  templateUrl: './dashboard-requests.component.html',
  styleUrls: ['./dashboard-requests.component.css']
})
export class DashboardRequestsComponent implements OnInit, OnChanges {
  public requestColumns = ['supplyName', 'quantity', 'deliveryDate', 'userName'];
  public requestSource: MatTableDataSource<Request>;

  @Input() requestList: Request[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private store: Store<State>,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.requestSource.sort = this.sort;
  }
​
  ngOnChanges(changes: SimpleChanges) {
    this.requestSource = new MatTableDataSource(this.requestList);
  }

  openDialog(request: Request): void {
    let dialogref = this.dialog.open(DashboardRequestsDetailsComponent, {
      width: '500px',
      data: request
    });
  }

}
