import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersDetailsComponent } from './customer-details/customer-details.component';
import { RouterModule } from '@angular/router';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';



@NgModule({
  declarations: [
    CustomersPageComponent,
    CustomersDetailsComponent,
    EditCustomerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class CustomersModule { }
