import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/Helpdesk.service';

import { IonicModule } from '@ionic/angular';

import { SolvedincidentDetailPageRoutingModule } from './solvedincident-detail-routing.module';

import { SolvedincidentDetailPage } from './solvedincident-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedincidentDetailPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [SolvedincidentDetailPage]
})
export class SolvedincidentDetailPageModule {}
