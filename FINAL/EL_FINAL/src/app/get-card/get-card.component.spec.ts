import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCardComponent } from './get-card.component';

describe('GetCardComponent', () => {
  let component: GetCardComponent;
  let fixture: ComponentFixture<GetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
