import { TestBed, inject } from '@angular/core/testing';

import { ProfilService } from './profil.service';

describe('ProfilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilService]
    });
  });

  it('should be created', inject([ProfilService], (service: ProfilService) => {
    expect(service).toBeTruthy();
  }));
});
