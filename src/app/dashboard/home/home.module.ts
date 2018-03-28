import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxPhoneSelectModule } from 'ngx-phone-select';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,NgxPhoneSelectModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
