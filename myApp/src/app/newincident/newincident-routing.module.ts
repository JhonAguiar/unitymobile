import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { NewincidentPage } from './newincident.page';

const routes: Routes = [
  {
    path: '',
    component: NewincidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewincidentPageRoutingModule {}
