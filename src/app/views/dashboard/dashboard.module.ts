import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyConverterModule } from '../../shared/components/currency-converter/currency-converter.module';
import { HeaderModule } from '../../layout/header/header.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CurrencyConverterModule,
    HeaderModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
