import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationGuard} from './authentication/authentication.guard';
import {AuthenticationService} from './authentication/authentication.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
  ]
})
export class CoreModule { }
