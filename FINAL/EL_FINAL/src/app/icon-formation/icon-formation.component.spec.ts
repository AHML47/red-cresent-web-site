import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFormationComponent } from './icon-formation.component';

describe('IconFormationComponent', () => {
  let component: IconFormationComponent;
  let fixture: ComponentFixture<IconFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
