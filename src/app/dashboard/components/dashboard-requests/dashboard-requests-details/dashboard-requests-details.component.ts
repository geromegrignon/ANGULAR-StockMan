import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../../shared/store';
import { TryUpdateRequest } from '../../../../shared/store/actions/request.actions';
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
  public requestForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Request,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DashboardRequestsDetailsComponent>,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.initForm(this.data);
    }

    initForm(request: Request): void {
      this.requestForm = this.formBuilder.group({
        quantity: [request.quantity, [Validators.required]],
        deliveryDate: [request.deliveryDate, [Validators.required]],
        username: [request.user.username, [Validators.required]]
      });
    }

    close(): void {
      this.dialogRef.close();
    }

    updateStatus() {
      switch (this.data.activeStatus) {
        case 'en attente de validation' :
        this.data.activeStatus = 'validé';
          break;
        default:
      }
      this.store.dispatch(new TryUpdateRequest({
        id: this.data.id,
        quantity: this.data.quantity,
        deliveryDate: this.data.deliveryDate,
        activeStatus: this.data.activeStatus
      }));
      this.close();
    }
  }


