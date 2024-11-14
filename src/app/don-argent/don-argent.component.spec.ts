import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonArgentComponent } from './don-argent.component';

describe('DonArgentComponent', () => {
  let component: DonArgentComponent;
  let fixture: ComponentFixture<DonArgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonArgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
