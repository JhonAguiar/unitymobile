import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryincidentsDetailPage } from './historyincidents-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryincidentsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryincidentsDetailPageRoutingModule {}
