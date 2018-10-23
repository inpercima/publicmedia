import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPostComponent } from './last-post.component';

describe('LastPostComponent', () => {
  let component: LastPostComponent;
  let fixture: ComponentFixture<LastPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LastPostComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
