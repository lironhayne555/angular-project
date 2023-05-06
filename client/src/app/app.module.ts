import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    EmployeesModule,
    CustomersModule
    
    

     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
