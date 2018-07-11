import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { InterestListComponent } from './interest-list/interest-list.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: 'interest-list', component: InterestListComponent },
  { path: 'project-list', component: ProjectListComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
