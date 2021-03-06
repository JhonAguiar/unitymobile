import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentDetailPageRoutingModule } from './incident-detail-routing.module';

import { IncidentDetailPage } from './incident-detail.page';

import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/Helpdesk.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentDetailPageRoutingModule,
    HttpClientModule],providers: [
      HelpdeskService
    ],
  declarations: [IncidentDetailPage]
})
export class IncidentDetailPageModule {}
