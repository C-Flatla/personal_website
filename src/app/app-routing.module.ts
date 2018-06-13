import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConstructionComponent } from './construction/construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/under_construction', pathMatch: 'full' },
  { path: 'under_construction', component: ConstructionComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
