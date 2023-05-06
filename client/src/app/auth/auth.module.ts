import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiledErrorComponent } from './filed-error/filed-error.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    FiledErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
})
export class AuthModule { }
