import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticleAdminComponent } from './liste-article-admin.component';

describe('ListeArticleAdminComponent', () => {
  let component: ListeArticleAdminComponent;
  let fixture: ComponentFixture<ListeArticleAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeArticleAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArticleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
