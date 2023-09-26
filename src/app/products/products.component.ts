import { Component } from '@angular/core';
import { imagesPath } from '../path';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  domesticPath = imagesPath + "home/content"

  constructor(private router: Router){
    
  }

  navigate()
  {
    this.router.navigate(["/contact"])
  }
}
