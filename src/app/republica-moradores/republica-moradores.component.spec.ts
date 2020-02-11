import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaMoradoresComponent } from './republica-moradores.component';

describe('RepublicaMoradoresComponent', () => {
  let component: RepublicaMoradoresComponent;
  let fixture: ComponentFixture<RepublicaMoradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaMoradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaMoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
