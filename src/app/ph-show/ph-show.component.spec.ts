import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhShowComponent } from './ph-show.component';

describe('PhShowComponent', () => {
  let component: PhShowComponent;
  let fixture: ComponentFixture<PhShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
