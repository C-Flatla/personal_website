import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbCollapseModule.forRoot()
      ],
      declarations: [
        NavBarComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three links', () => {
    expect(nativeElement.querySelectorAll('.nav-item').length).toBe(3);
  });

  it('should default to collapsed', () => {
    expect(nativeElement.querySelectorAll('.navbar-collapse.collapse.show').length).toBe(0);
  });

  it('should show the nav-bar when not collapsed', () => {
    component.isCollapsed = false;
    fixture.detectChanges();
    expect(nativeElement.querySelectorAll('.navbar-collapse.collapse.show').length).toBe(1);
  });
});
