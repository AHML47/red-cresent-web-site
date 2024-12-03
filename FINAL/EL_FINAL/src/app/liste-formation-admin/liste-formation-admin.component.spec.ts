import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormationAdminComponent } from './liste-formation-admin.component';

describe('ListeFormationAdminComponent', () => {
  let component: ListeFormationAdminComponent;
  let fixture: ComponentFixture<ListeFormationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeFormationAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFormationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
