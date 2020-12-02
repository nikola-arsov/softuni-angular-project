import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PricingPacketsComponent} from './pricing-packets.component';

describe('PricingPacketsComponent', () => {
  let component: PricingPacketsComponent;
  let fixture: ComponentFixture<PricingPacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingPacketsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
