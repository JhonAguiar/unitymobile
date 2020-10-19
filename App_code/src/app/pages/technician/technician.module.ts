import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnicianPageRoutingModule } from './technician-routing.module';

import { TechnicianPage } from './technician.page';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/helpdesk.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicianPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [TechnicianPage]
})
export class TechnicianPageModule {}
