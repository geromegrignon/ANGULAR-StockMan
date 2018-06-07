import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderNewComponent } from './provider-new.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProviderNewComponent', () => {
  let component: ProviderNewComponent;
  let fixture: ComponentFixture<ProviderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderNewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
