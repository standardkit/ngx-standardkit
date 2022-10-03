import { TestBed } from '@angular/core/testing';

import { NgxStandardkitService } from './ngx-standardkit.service';

describe('NgxStandardkitService', () => {
  let service: NgxStandardkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStandardkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
