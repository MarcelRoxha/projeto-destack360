import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaSaidaComponent } from './conta-saida.component';

describe('ContaSaidaComponent', () => {
  let component: ContaSaidaComponent;
  let fixture: ComponentFixture<ContaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaSaidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
