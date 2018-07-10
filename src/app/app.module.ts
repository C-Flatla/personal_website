import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConstructionComponent } from './construction/construction.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InterestListComponent } from './interest-list/interest-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    NavBarComponent,
    InterestListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
