import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/Helpdesk.service';

import { IonicModule } from '@ionic/angular';

import { TechnicianDetailPageRoutingModule } from './technician-detail-routing.module';

import { TechnicianDetailPage } from './technician-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicianDetailPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [TechnicianDetailPage]
})
export class TechnicianDetailPageModule {}
