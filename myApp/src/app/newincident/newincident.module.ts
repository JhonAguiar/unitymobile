import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewincidentPageRoutingModule } from './newincident-routing.module';
import { NewincidentPage } from './newincident.page';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from '../services/freeapi.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NewincidentPageRoutingModule,
    HttpClientModule
  ],providers: [
    freeApiService
  ],
  declarations: [NewincidentPage]
})
export class NewincidentPageModule {}
