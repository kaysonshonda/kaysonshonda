import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSeries } from './vehicle-series';

describe('VehicleSeries', () => {
  let component: VehicleSeries;
  let fixture: ComponentFixture<VehicleSeries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleSeries],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleSeries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
