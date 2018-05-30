import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilListComponent } from './profil-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfilListComponent', () => {
  let component: ProfilListComponent;
  let fixture: ComponentFixture<ProfilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatTableModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
