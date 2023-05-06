import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { AuthService } from './core/auth.service';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';
import { EmployeesModule } from './employees/employees.module';
import { CustomersDetailsComponent } from './customers/customer-details/customer-details.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    // redirectTo: '/home',
    // pathMatch: 'full',
    canActivateChild: [AuthService],
    children: [
        { path: 'customers', component: CustomersPageComponent },
        { path: 'employees', component: EmployeesPageComponent },
        { path: 'customer-details/:id', component: CustomersDetailsComponent },
        { path: 'edit-customer/:id', component: EditCustomerComponent },
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
