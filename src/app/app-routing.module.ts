import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/under_construction', pathMatch: 'full' },
  { path: 'under_construction', component: UnderConstructionComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
