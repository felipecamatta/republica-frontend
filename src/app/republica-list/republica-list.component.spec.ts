import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaListComponent } from './republica-list.component';

describe('RepublicaListComponent', () => {
  let component: RepublicaListComponent;
  let fixture: ComponentFixture<RepublicaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
