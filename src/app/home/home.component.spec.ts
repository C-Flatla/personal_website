import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { HomeComponent } from './home.component';

@Component({selector: 'app-under-construction', template: ''})
class UnderConstructionStubComponent { }

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        UnderConstructionStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'codyflatla.ca'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('codyflatla.ca');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.jumbotron').textContent).toContain('Welcome to codyflatla.ca!');
  }));
});
