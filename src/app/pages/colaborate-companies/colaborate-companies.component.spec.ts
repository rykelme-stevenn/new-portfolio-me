import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborateCompaniesComponent } from './colaborate-companies.component';

describe('ColaborateCompaniesComponent', () => {
  let component: ColaborateCompaniesComponent;
  let fixture: ComponentFixture<ColaborateCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaborateCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaborateCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
