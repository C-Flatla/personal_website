import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ChangelogComponent } from './changelog.component';

@Component({selector: 'app-under-construction', template: ''})
class UnderConstructionStubComponent { }

describe('ChangelogComponent', () => {
  let component: ChangelogComponent;
  let fixture: ComponentFixture<ChangelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangelogComponent,
        UnderConstructionStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
