import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivangforComponent } from './diretivangfor.component';

describe('DiretivangforComponent', () => {
  let component: DiretivangforComponent;
  let fixture: ComponentFixture<DiretivangforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivangforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivangforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
