import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondaShineSeries } from './honda-shine-series';

describe('HondaShineSeries', () => {
  let component: HondaShineSeries;
  let fixture: ComponentFixture<HondaShineSeries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HondaShineSeries],
    }).compileComponents();

    fixture = TestBed.createComponent(HondaShineSeries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
