import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product, products } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product : Product | undefined;
}
