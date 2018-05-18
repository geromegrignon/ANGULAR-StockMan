import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDetailsComponent } from './profil-details.component';

describe('ProfilDetailsComponent', () => {
  let component: ProfilDetailsComponent;
  let fixture: ComponentFixture<ProfilDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
