import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail: Product | undefined;
  constructor(private cartService:CartService,private router: ActivatedRoute, private productService: ProductService) { }
  ngOnInit(): void {
    let id = String(this.router.snapshot.params['id'])
    this.productService.getproductId(id).subscribe(data => {this.productDetail = data})
    console.log(id);
  }

}
