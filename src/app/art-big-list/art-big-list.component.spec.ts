import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtBigListComponent } from './art-big-list.component';

describe('ArtBigListComponent', () => {
  let component: ArtBigListComponent;
  let fixture: ComponentFixture<ArtBigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtBigListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtBigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
