import { TestBed } from '@angular/core/testing';

import { Protein } from './protein';

describe('Protein', () => {
  let service: Protein;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Protein);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
