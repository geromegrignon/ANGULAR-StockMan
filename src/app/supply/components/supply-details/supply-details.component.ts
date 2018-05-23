import { Component, OnInit } from '@angular/core';
import { Supply } from '../../../shared/model/supply.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { TryFetchSelectedSupply, TryUpdateSupply } from '../../shared/store/supply.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { errorSelectedSupply, selectedSupply } from '../../shared/store/supply.selectors';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { map, tap, filter } from 'rxjs/operators';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { SupplyService } from '../../shared/services/supply.service';
import { Location } from '@angular/common';
import { Provider } from '../../../shared/model/provider.model';
import { TryFetchProviders } from '../../../shared/store/actions/provider.actions';
import { errorProviderSelector, providerListSelector } from '../../../shared/store/selectors/provider.selectors';
import { ProviderService } from '../../../shared/services/provider.service';


@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css']
})
export class SupplyDetailsComponent implements OnInit {
  public id: number;
  public supply$: Observable<Supply>;
  public providers$: Observable<Provider[]>;
  public errorSupply$: Observable<string>;
  public errorProviders$: Observable<string>;
  public readonly: boolean = true;
  public supplyForm: FormGroup;
  public orderForm: FormGroup;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
  ) {}

  ngOnInit() {
    // get info through router
     this.id = +this.route.snapshot.paramMap.get('id');

    this.supply$ = this.store.pipe(select(selectedSupply));
    this.store.dispatch(new TryFetchSelectedSupply(this.id));
    this.errorSupply$ = this.store.pipe(select(errorSelectedSupply));

    this.initForm();

  }

  initForm(): void {
    this.supplyForm = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      unitsInStock: [''],
      alertStock: ['']
    });
    this.orderForm = this.formBuilder.group({
      quantity: [''],
      date: ['']
    });
  }

  editMode(): void {
    this.readonly = false;
  }

  cancel(): void {
    this.readonly = true;
    this.supply$ = this.store.pipe((select(selectedSupply)));
    this.store.dispatch(new TryFetchSelectedSupply(this.id));
  }

  save(): void {
    this.store.dispatch(new TryUpdateSupply(this.supplyForm.value));
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



}
