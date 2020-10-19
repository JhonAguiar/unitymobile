import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/Helpdesk.service';

import { IonicModule } from '@ionic/angular';

import { HistoryincidentsDetailPageRoutingModule } from './historyincidents-detail-routing.module';

import { HistoryincidentsDetailPage } from './historyincidents-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryincidentsDetailPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [HistoryincidentsDetailPage]
})
export class HistoryincidentsDetailPageModule {}
