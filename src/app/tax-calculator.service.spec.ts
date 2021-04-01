import { TestBed } from '@angular/core/testing';

import { TaxCalculatorService } from './tax-calculator.service';

describe('TaxCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaxCalculatorService = TestBed.get(TaxCalculatorService);
    expect(service).toBeTruthy();
  });
});
