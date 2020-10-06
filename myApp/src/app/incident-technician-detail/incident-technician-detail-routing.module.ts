import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentTechnicianDetailPage } from './incident-technician-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentTechnicianDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentTechnicianDetailPageRoutingModule {}
