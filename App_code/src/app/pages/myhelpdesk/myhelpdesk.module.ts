import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyhelpdeskPageRoutingModule } from './myhelpdesk-routing.module';

import { MyhelpdeskPage } from './myhelpdesk.page';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/helpdesk.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyhelpdeskPageRoutingModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [MyhelpdeskPage]
})
export class MyhelpdeskPageModule {}
