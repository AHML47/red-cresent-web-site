import { TestBed } from '@angular/core/testing';

import { ShowedArticleService } from './showed-article.service';

describe('ShowedArticleService', () => {
  let service: ShowedArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowedArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
