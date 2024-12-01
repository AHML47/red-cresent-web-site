import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonListPhyComponent } from './don-list-phy.component';

describe('DonListPhyComponent', () => {
  let component: DonListPhyComponent;
  let fixture: ComponentFixture<DonListPhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonListPhyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonListPhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
