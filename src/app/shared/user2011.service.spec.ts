import { TestBed, inject } from '@angular/core/testing';

import { User2011Service } from './user2011.service';

describe('User2011Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User2011Service]
    });
  });

  it('should be created', inject([User2011Service], (service: User2011Service) => {
    expect(service).toBeTruthy();
  }));
});
