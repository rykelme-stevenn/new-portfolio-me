import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLenguagesComponent } from './my-lenguages.component';

describe('MyLenguagesComponent', () => {
  let component: MyLenguagesComponent;
  let fixture: ComponentFixture<MyLenguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLenguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLenguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
