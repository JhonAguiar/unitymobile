import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidentdetailsolvedPageRoutingModule } from './incidentdetailsolved-routing.module';

import { IncidentdetailsolvedPage } from './incidentdetailsolved.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from '../services/freeapi.service';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    IncidentdetailsolvedPageRoutingModule,
    HttpClientModule
  ],providers: [
    freeApiService
  ],
  declarations: [IncidentdetailsolvedPage]
})
export class IncidentdetailsolvedPageModule {}
