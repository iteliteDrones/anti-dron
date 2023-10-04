import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';

import { MatIconModule } from '@angular/material/icon';
import { NgxResizeObserverModule } from 'ngx-resize-observer';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxResizeObserverModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
