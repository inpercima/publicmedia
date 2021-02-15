import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LastPostService } from './last-post.service';

describe('LastPostService', () => {
  let service: LastPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(LastPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
