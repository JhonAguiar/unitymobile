import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvedincidentDetailPage } from './solvedincident-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SolvedincidentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedincidentDetailPageRoutingModule {}
