import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../../shared/store';
import { User } from '../../../shared/model/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  form: FormGroup;
  id: number;
  // provider: Provider;
  public readonly: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    // private providerservice: ProviderService,
    private store: Store<State>
  ) { }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   if (params.index) {
    //     this.id = params.index;
    //   // } else {
    //   //   this.id = 1;
    //   }
    // this.providerservice.getProviderById(+this.route.snapshot.paramMap.get('id')).subscribe(
    //   (provider) => {
    //     this.provider = provider;
    //     this.initForm(provider);
    //   });
    // });
    }

  initForm(user: User) {
    this.form = this.formBuilder.group({

    });

  }

  editMode(): void {
    this.readonly = false;
  }

  cancel(): void {
    // this.supply$ = this.store.pipe(select(selectedSupply));
    this.readonly = true;
  }

  save(): void {
    // this.store.dispatch(new TryUpdateProvider(
    //   {
    //     id: this.id,
    //   ...this.form.value
    //   }
    // ));

    this.readonly = true;
  }

}
