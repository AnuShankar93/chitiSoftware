import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

@NgModule({
  declarations: [BlankLayoutComponent, FullLayoutComponent],
  exports: [
    BlankLayoutComponent,
    FullLayoutComponent
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
