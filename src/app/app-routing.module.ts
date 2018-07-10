import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { InterestListComponent } from './interest-list/interest-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: 'interest-list', component: InterestListComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
