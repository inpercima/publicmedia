import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { DashboardCardComponent } from './dashboard-card.component';

describe('DashboardCardComponent', () => {
  let component: DashboardCardComponent;
  let fixture: ComponentFixture<DashboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardCardComponent,
      ],
      imports: [
        MatCardModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
