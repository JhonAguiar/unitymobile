import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/Helpdesk.service';


import { IonicModule } from '@ionic/angular';

import { NewincidentPageRoutingModule } from './newincident-routing.module';

import { NewincidentPage } from './newincident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewincidentPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [NewincidentPage]
})
export class NewincidentPageModule {}
