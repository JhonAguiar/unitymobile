import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentDetail2PageRoutingModule } from './incident-detail2-routing.module';

import { IncidentDetail2Page } from './incident-detail2.page';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from '../services/freeapi.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    MatIconModule,
    IncidentDetail2PageRoutingModule,
    HttpClientModule],providers: [
      freeApiService
    ],
  declarations: [IncidentDetail2Page]
})
export class IncidentDetail2PageModule {}
