import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableListRoutingModule } from './tablelist-routing.module';
import { TableListComponent } from './tablelist.component';
import { NgxPhoneSelectModule } from 'ngx-phone-select';
@NgModule({
  imports: [
    CommonModule,
    TableListRoutingModule,NgxPhoneSelectModule
  ],
  declarations: [TableListComponent]
})
export class TableListModule { }
