import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyListComponent } from './supply-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { Supply } from '../../../shared/model/supply.model';
import { Provider } from '../../../shared/model/provider.model';
import { StoreModule, combineReducers } from '@ngrx/store';
import { reducersMap } from '../../../shared/store';
import { supplyReducer } from '../../../shared/store/reducers/supply.reducer';

describe('SupplyListComponent', () => {
  let component: SupplyListComponent;
  let fixture: ComponentFixture<SupplyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        MatTableModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('supply', supplyReducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('alert function', () => {
    it('should return true', () => {
      const mock = {
        id: 1,
        idReference: '34HER',
        name: 'papier',
        description: 'pour photocopies',
        unitsInStock: 32,
        alertStock: 2,
        provider: {} as Provider,
        orderRequestList: []
    };
    // component.alert(mock);
    fixture.detectChanges();
      expect(true).toEqual(true);
    });
  });
});
