import { TestBed } from '@angular/core/testing';

import { NavigationScrollService } from './navigation-scroll.service';

describe('NavigationScrollService', () => {
  let service: NavigationScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
