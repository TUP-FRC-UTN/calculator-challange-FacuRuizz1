import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraActionsComponent } from './calculadora-actions.component';

describe('CalculadoraActionsComponent', () => {
  let component: CalculadoraActionsComponent;
  let fixture: ComponentFixture<CalculadoraActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
