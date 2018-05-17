import { Component, OnInit } from '@angular/core';
import { Supply } from '../../../shared/model/supply.model';
import { Store, select } from '@ngrx/store';
import { State } from '../../../shared/store';
import { TryFetchSelectedSupply, TryUpdateSupply } from '../../shared/store/supply.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { errorSelectedSupply, selectedSupply } from '../../shared/store/supply.selectors';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { map, tap } from 'rxjs/operators';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { SupplyService } from '../../shared/services/supply.service';

@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css']
})
export class SupplyDetailsComponent implements OnInit {
  public supply$: Observable<Supply>;
  public id: number;
  public error$: Observable<string>;
  public readonly: boolean = true;
  public supplyForm: FormGroup;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private supplyService: SupplyService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.supply$ = this.store.pipe((select(selectedSupply)));
    this.store.dispatch(new TryFetchSelectedSupply(this.id));
    this.error$ = this.store.pipe((select(errorSelectedSupply)));
    this.initForm();
  }

  initForm() {
    this.supplyForm = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      unitsInStock: [''],
      alertStock: ['']
    });
  }

  editMode() {
    this.readonly = false;
  }

  cancel() {
    this.readonly = true;
    this.supply$ = this.store.pipe((select(selectedSupply)));
    this.store.dispatch(new TryFetchSelectedSupply(this.id));
  }

  save() {
    this.store.dispatch(new TryUpdateSupply(this.supplyForm.value));
  }


}
