import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecouristeComponent } from './secouriste.component';

describe('SecouristeComponent', () => {
  let component: SecouristeComponent;
  let fixture: ComponentFixture<SecouristeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecouristeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecouristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
