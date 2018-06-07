import { Component, OnInit, OnChanges } from '@angular/core';
import { Supply } from '../../../shared/model/supply.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Provider } from '../../../shared/model/provider.model';
import { errorProviderSelector, providerListSelector } from '../../../shared/store/selectors/provider.selectors';
import { ProviderService } from '../../../shared/services/provider.service';
import { selectedSupply, errorSupplySelector } from '../../../shared/store/selectors/supply.selectors';
import { TryFetchSelectedSupply, TryUpdateSupply } from '../../../shared/store/actions/supply.actions';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { SupplyService } from '../../../shared/services/supply.service';
import { TryCreateRequest } from '../../../shared/store/actions/request.actions';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/model/user.model';


@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css']
})
export class SupplyDetailsComponent implements OnInit, OnChanges {
  public id: number;
  public supply$: Observable<Supply> = this.store.pipe(select(selectedSupply));
  public errorSupply$: Observable<string> = this.store.pipe(select(errorSupplySelector));
  public readonly: boolean = true;
  public supplyForm: FormGroup;
  public requestForm: FormGroup;
  public supply: Supply;
  public user: User;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private service: SupplyService,
    private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new TryFetchSelectedSupply(this.id));

    this.initForm();
    this.service.getSupply(this.id).subscribe(
      data => {
        this.supply = data;
        this.alertDialog();
       }
    );
    this.userService.getUserById(1).subscribe( data => this.user = data);
  }

  ngOnChanges() {
    this.store.dispatch(new TryFetchSelectedSupply(this.id));
  }

  initForm(): void {
    this.supplyForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      alertStock: ['', Validators.required]
    });
    this.requestForm = this.formBuilder.group({
      quantity: ['', [Validators.required]],
      deliveryDate: ['', [Validators.required]]
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
      requestList: null
      }
    ));
    this.readonly = true;
  }

  backToList(): void {
    this.router.navigate(['/supply']);
  }

  hasRequests(supply: Supply): boolean {
    if (supply.requestList && supply.requestList.length) {
      return true;
    } else {
      return false;
    }
  }

  alertDialog(): void {
    if (!this.supply.requestList.length && (this.supply.unitsInStock < this.supply.alertStock)) {
      this.dialog.open(AlertDialogComponent, {
        data: this.supply
      });
     }
  }

  createRequest(): void {
    this.store.dispatch(new TryCreateRequest(
      {
        quantity: this.requestForm.value.quantity,
        deliveryDate: this.requestForm.value.deliveryDate,
        activeStatus: 'en attente de validation',
        statusList: [{
          name: 'en attente de validation',
          comment: '',
          user : this.user
        }],
        supply: this.supply,
        user: this.user
      }
    ));
    this.snackBar.open('Requête créée', '', {
      duration: 2000,
      verticalPosition: 'top'
    });
    this.rebuildRequestForm();
  }

  rebuildRequestForm() {
    this.requestForm.reset({
      quantity: '',
      deliveryDate: ''
    });
    this.requestForm.markAsPristine();
  }
}
