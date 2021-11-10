import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaEntradaComponent } from './conta-entrada.component';

describe('ContaEntradaComponent', () => {
  let component: ContaEntradaComponent;
  let fixture: ComponentFixture<ContaEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
