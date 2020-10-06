import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentdetailsolvedPage } from './incidentdetailsolved.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentdetailsolvedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentdetailsolvedPageRoutingModule {}
