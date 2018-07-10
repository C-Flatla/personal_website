import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { InterestListComponent } from './interest-list.component';

@Component({selector: 'app-under-construction', template: ''})
class UnderConstructionStubComponent { }

describe('InterestListComponent', () => {
  let component: InterestListComponent;
  let fixture: ComponentFixture<InterestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InterestListComponent,
        UnderConstructionStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
