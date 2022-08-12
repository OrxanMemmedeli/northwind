import { TestBed } from '@angular/core/testing';

import { AuthQuoteService } from './auth-quote.service';

describe('AuthQuoteService', () => {
  let service: AuthQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
