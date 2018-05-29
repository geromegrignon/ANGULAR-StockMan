import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Provider } from '../../../shared/model/provider.model';
import { ProviderService } from '../../../shared/services/provider.service';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';
import { TryUpdateProvider } from '../../../shared/store/actions/provider.actions';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {
  form: FormGroup;
  id: number;
  provider: Provider;
  public readonly: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private providerservice: ProviderService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.index) {
        this.id = params.index;
      // } else {
      //   this.id = 1;
      }
    this.providerservice.getProviderById(+this.route.snapshot.paramMap.get('id')).subscribe(
      (provider) => {
        this.provider = provider;
        this.initForm(provider);
      });
    });
    }

  initForm(provider: Provider) {
    this.form = this.formBuilder.group({
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
      supplyList: [provider.supplyList]
    });
    console.log(provider);
  }

  editMode(): void {
    this.readonly = false;
  }

  cancel(): void {
    // this.supply$ = this.store.pipe(select(selectedSupply));
    this.readonly = true;
  }

  save(): void {
    this.store.dispatch(new TryUpdateProvider(
      {
        id: this.id,
      ...this.form.value
      }
    ));

    this.readonly = true;
  }

}
