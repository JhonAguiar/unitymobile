import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedincidentPageRoutingModule } from './solvedincident-routing.module';

import { SolvedincidentPage } from './solvedincident.page';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/helpdesk.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedincidentPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [SolvedincidentPage]
})
export class SolvedincidentPageModule {}
