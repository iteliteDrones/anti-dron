import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "news", component: NewsComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
