import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvedincidentPage } from './solvedincident.page';

const routes: Routes = [
  {
    path: '',
    component: SolvedincidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedincidentPageRoutingModule {}
