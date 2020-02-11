import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepublicaReceitaDespesaFormComponent } from './republica-receita-despesa-form.component';

describe('RepublicaReceitaDespesaFormComponent', () => {
  let component: RepublicaReceitaDespesaFormComponent;
  let fixture: ComponentFixture<RepublicaReceitaDespesaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicaReceitaDespesaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepublicaReceitaDespesaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
