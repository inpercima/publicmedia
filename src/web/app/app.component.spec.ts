import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingPipe } from './app-routing.pipe';
import { ConfigService } from './core/config.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppRoutingPipe,
      ],
      imports: [
        MatTabsModule,
        MatToolbarModule,
        RouterTestingModule,
      ],
      providers: [
        ConfigService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-cli-for-swaaplate'`, () => {
    expect(component.appname).toEqual('angular-cli-for-swaaplate');
  });

  it('should render title in a mat-toolbar tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('angular-cli-for-swaaplate');
  });
});
