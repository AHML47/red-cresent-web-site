import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonListMonComponent } from './don-list-mon.component';

describe('DonListMonComponent', () => {
  let component: DonListMonComponent;
  let fixture: ComponentFixture<DonListMonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonListMonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonListMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
