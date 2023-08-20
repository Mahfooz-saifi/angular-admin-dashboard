import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component61Component } from './component61/component61.component';

const routes: Routes = [
  { path: '',   redirectTo: '/comp61', pathMatch: 'full' },
  { path: 'comp61', component: Component61Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
