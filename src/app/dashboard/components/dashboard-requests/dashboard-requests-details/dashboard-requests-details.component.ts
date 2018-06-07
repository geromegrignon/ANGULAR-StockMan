import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../../../../shared/store';
import { TryFetchRequestById } from '../../../../shared/store/actions/request.actions';
import { singleRequestSelector } from '../../../../shared/store/selectors/request.selectors';
import { Observable } from 'rxjs';
import { Request } from '../../../../shared/model/request.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-requests-details',
  templateUrl: './dashboard-requests-details.component.html',
  styleUrls: ['./dashboard-requests-details.component.css']
})
export class DashboardRequestsDetailsComponent implements OnInit {
  public id: number;
  public request$: Observable<Request> = this.store.pipe(select(singleRequestSelector));
  public requestForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public data: Request,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DashboardRequestsDetailsComponent>
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
      } else {
        this.id = 0;
      }
      this.store.dispatch(new TryFetchRequestById(this.id));
    });
    this.initForm();
    }

    initForm(): void {
      this.requestForm = this.formBuilder.group({
        quantity: [this.data.quantity, [Validators.required]],
        deliveryDate: [this.data.deliveryDate, [Validators.required]]
      });
    }

    close(): void {
      this.dialogRef.close();
    }
  }


