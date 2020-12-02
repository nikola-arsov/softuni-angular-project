import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardAppsComponent} from './dashboard-apps.component';

describe('DashboardAppsComponent', () => {
  let component: DashboardAppsComponent;
  let fixture: ComponentFixture<DashboardAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAppsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
