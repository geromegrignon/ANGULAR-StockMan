import { Component, OnInit } from '@angular/core';
import { Supply } from '../../../shared/model/supply.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { Provider } from '../../../shared/model/provider.model';
import { TryFetchProviders } from '../../../shared/store/actions/provider.actions';
import { errorProviderSelector, providerListSelector } from '../../../shared/store/selectors/provider.selectors';
import { ProviderService } from '../../../shared/services/provider.service';
import { selectedSupply, errorSupplySelector } from '../../../shared/store/selectors/supply.selectors';
import { TryFetchSelectedSupply, TryUpdateSupply } from '../../../shared/store/actions/supply.actions';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { SupplyService } from '../../../shared/services/supply.service';
import { TryCreateRequest } from '../../../shared/store/actions/request.actions';
import { OrderRequestsComponent } from './order-requests/order-requests.component';


@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css']
})
export class SupplyDetailsComponent implements OnInit {
  public id: number;
  public supply$: Observable<Supply> = this.store.pipe(select(selectedSupply));
  public errorSupply$: Observable<string> = this.store.pipe(select(errorSupplySelector));
  public readonly: boolean = true;
  public supplyForm: FormGroup;
  public orderForm: FormGroup;
  public supply: Supply;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private dialog: MatDialog,
    private service: SupplyService
  ) {}

  ngOnInit() {
    // get info through router
     this.id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new TryFetchSelectedSupply(this.id));

    this.initForm();
    this.service.getSupply(this.id).subscribe(
      data => {
        this.supply = data,
      this.alertDialog(); }
    );

  }

  initForm(): void {
    this.supplyForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      alertStock: ['', Validators.required]
    });
    this.orderForm = this.formBuilder.group({
      quantity: ['', Validators.required],
      deliveryDate: ['', Validators.required]
    });
  }

  editMode(): void {
    this.readonly = false;
  }

  cancel(): void {
    this.supply$ = this.store.pipe(select(selectedSupply));
    this.readonly = true;
  }

  save(): void {
    this.store.dispatch(new TryUpdateSupply(
      {
      ...this.supplyForm.value,
      orderRequestList: null
      }
    ));
    this.readonly = true;
  }

  backToList(): void {
    // change to router.nagivate
    this.location.back();
  }

  addToOrder(): void {
    // to complete
  }

  displayActiveOrderRequests(supply: Supply) {
    if (supply.orderRequestList && supply.orderRequestList.length) {
      return true;
    } else {
      return false;
    }
  }

  alertDialog(): void {
    if (!this.supply.orderRequestList.length && (this.supply.unitsInStock < this.supply.alertStock)) {
      this.dialog.open(AlertDialogComponent, {
        data: this.supply
      });
     }
  }

  createRequest() {
    this.store.dispatch(new TryCreateRequest(
      {
        quantity: this.orderForm.value.quantity,
        deliveryDate: this.orderForm.value.deliveryDate,
        status: null,
        supply: null,
        user: null
      }
    ));
  }



}
