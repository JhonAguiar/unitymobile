import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelpdeskService } from '../../services/Helpdesk.service';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],providers: [
    HelpdeskService
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
