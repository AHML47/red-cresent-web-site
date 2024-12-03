import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDFormationComponent } from './addformation.component';

describe('ADDFormationComponent', () => {
  let component: ADDFormationComponent;
  let fixture: ComponentFixture<ADDFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADDFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADDFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
