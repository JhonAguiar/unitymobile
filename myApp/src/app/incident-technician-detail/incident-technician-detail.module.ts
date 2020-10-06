import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IonicModule } from '@ionic/angular';

import { IncidentTechnicianDetailPageRoutingModule } from './incident-technician-detail-routing.module';

import { IncidentTechnicianDetailPage } from './incident-technician-detail.page';
import {MatCardModule} from '@angular/material/card';
import { freeApiService } from '../services/freeapi.service';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    MatIconModule,
    IncidentTechnicianDetailPageRoutingModule,
    HttpClientModule
  ],providers: [
    freeApiService
  ],
  declarations: [IncidentTechnicianDetailPage]
})
export class IncidentTechnicianDetailPageModule {}
