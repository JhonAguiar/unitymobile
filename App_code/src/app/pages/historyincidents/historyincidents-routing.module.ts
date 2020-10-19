import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryincidentsPage } from './historyincidents.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryincidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryincidentsPageRoutingModule {}
