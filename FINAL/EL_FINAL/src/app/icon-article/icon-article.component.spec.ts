import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconArticleComponent } from './icon-article.component';

describe('IconArticleComponent', () => {
  let component: IconArticleComponent;
  let fixture: ComponentFixture<IconArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
