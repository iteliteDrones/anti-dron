import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    NgOptimizedImage
  ]
})
export class ProductsModule { }
