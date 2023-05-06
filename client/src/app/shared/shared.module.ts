import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    TitleComponent
  ]
})
export class SharedModule { }
