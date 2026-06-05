import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShineSeries } from './shine-series';

describe('ShineSeries', () => {
  let component: ShineSeries;
  let fixture: ComponentFixture<ShineSeries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShineSeries],
    }).compileComponents();

    fixture = TestBed.createComponent(ShineSeries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
