import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Provider } from '../../../shared/model/provider.model';
import { ProviderService } from '../../../shared/services/provider.service';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { TryUpdateProvider, TryFetchProviderById } from '../../../shared/store/actions/provider.actions';
import { providerByIdSelector } from '../../../shared/store/selectors/provider.selectors';
import { Observable } from 'rxjs';
import { ProviderFormComponent } from '../provider-form/provider-form.component';
import { readonlySelector } from '../../../shared/store/selectors/form.selector';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {
  public id: number;
  public provider$: Observable<Provider> = this.store.pipe(select(providerByIdSelector));
  public provider: Provider;
  public readonly$: Observable<boolean> = this.store.pipe(select(readonlySelector));

  @ViewChild(ProviderFormComponent) providerForm: ProviderFormComponent;

  constructor(
    private route: ActivatedRoute,
    private providerservice: ProviderService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
      } else {
        this.id = 0;
      }
      this.store.dispatch(new TryFetchProviderById(this.id));
    });
    }

  editMode(): void {
    this.providerForm.editMode();
  }

  cancel(): void {
    this.providerForm.cancel();
  }

  save(): void {
    this.providerForm.save();
  }

}
