import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncidentDetail2Page } from './incident-detail2.page';

const routes: Routes = [
  {
    path: '',
    component: IncidentDetail2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncidentDetail2PageRoutingModule {}
