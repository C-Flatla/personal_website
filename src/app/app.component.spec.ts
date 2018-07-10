import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';

@Component({selector: 'router-outlet', template: '<h1 class="router-outlet-test">ROUTER</h1>'})
class RouterOutletStubComponent { }

@Component({selector: 'app-nav-bar', template: '<h1 class="nav-bar-test">NAV BAR</h1>'})
class NavBarStubComponent { }

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarStubComponent,
        RouterOutletStubComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render the router-outlet component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.router-outlet-test').textContent).toContain('ROUTER');
  }));

  it('should render the nav-bar component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.nav-bar-test').textContent).toContain('NAV BAR');
  }));
});
