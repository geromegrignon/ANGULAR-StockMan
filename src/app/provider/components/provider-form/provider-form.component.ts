import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Provider } from '../../../shared/model/provider.model';
import { TryUpdateProvider, TryCreateProvider, TryFetchProviderList } from '../../../shared/store/actions/provider.actions';
import { State } from '../../../shared/store';
import { Store, select } from '@ngrx/store';
import { readonlySelector } from '../../../shared/store/selectors/form.selector';
import { SetFormMode, SetReadonlyMode } from '../../../shared/store/actions/form.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.css']
})
export class ProviderFormComponent implements OnInit, OnChanges {
  public providerForm: FormGroup;
  public provider$: Observable<Provider>;
  public readonly$: Observable<boolean> = this.store.pipe(select(readonlySelector));
  public emptyProvider: Provider = {
    name: '',
    siret: null,
    addressInfo: {
      streetNumber: '',
      streetName: '',
      postalCode: null,
      city: '',
      country: ''
    },
    supplyList: [],
    contactList: []
  };


  @Input() provider: Provider;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setMode();
    this.initForm(this.provider);
  }

  ngOnChanges() {
    this.initForm(this.provider);
  }

  initForm(provider: Provider = this.emptyProvider): void {
    this.providerForm = this.formBuilder.group({
      id: [provider.id],
      name: [provider.name],
      siret: [provider.siret],
      addressInfo: this.formBuilder.group({
        streetNumber: [provider.addressInfo.streetNumber],
        streetName: [provider.addressInfo.streetName],
        postalCode: [provider.addressInfo.postalCode],
        city: [provider.addressInfo.city],
        country: [provider.addressInfo.country]
      }),
    });
  }

  editMode(): void {
    this.store.dispatch(new SetFormMode());
  }

  cancel(): void {
    // this.supply$ = this.store.pipe(select(selectedSupply));
    this.store.dispatch(new SetReadonlyMode());
  }

  save(): void {
    this.store.dispatch(new TryUpdateProvider({
      ...this.providerForm.value
    }));
    this.store.dispatch(new SetReadonlyMode());
  }

  create(): void {
    this.store.dispatch(new TryCreateProvider({
      name: this.providerForm.value.name,
      siret: this.providerForm.value.siret,
      addressInfo: {
        streetNumber: this.providerForm.value.addressInfo.streetNumber,
        streetName: this.providerForm.value.addressInfo.streetName,
        postalCode: this.providerForm.value.postalCode,
        city: this.providerForm.value.city,
        country: this.providerForm.value.country
      },
      supplyList: [],
      contactList: []
    }));
  }

  setMode() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.store.dispatch(new SetReadonlyMode());
    } else {
      this.store.dispatch(new SetFormMode());
    }
  }

}
