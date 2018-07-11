import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InterestListComponent } from './interest-list/interest-list.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ChangelogComponent } from './changelog/changelog.component';

library.add(faBars);

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    NavBarComponent,
    InterestListComponent,
    HomeComponent,
    ProjectListComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
