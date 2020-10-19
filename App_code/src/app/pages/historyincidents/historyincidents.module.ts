import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { HistoryincidentsPageRoutingModule } from './historyincidents-routing.module';

import { HistoryincidentsPage } from './historyincidents.page';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/helpdesk.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryincidentsPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [HistoryincidentsPage]
})
export class HistoryincidentsPageModule {}
