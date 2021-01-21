import { TestBed } from '@angular/core/testing';

import { usersService } from './users.service';

describe('RestService', () => {
  let service: usersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(usersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
