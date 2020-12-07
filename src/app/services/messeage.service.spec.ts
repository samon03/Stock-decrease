import { TestBed } from '@angular/core/testing';

import { MesseageService } from './messeage.service';

describe('MesseageService', () => {
  let service: MesseageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesseageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
