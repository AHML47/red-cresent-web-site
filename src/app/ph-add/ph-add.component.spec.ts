import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhAddComponent } from './ph-add.component';

describe('PhAddComponent', () => {
  let component: PhAddComponent;
  let fixture: ComponentFixture<PhAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
