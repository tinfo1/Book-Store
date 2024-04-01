import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = []
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe(data => {
      this.products = data
      this.filterProductList = this.products;
    })
  }
  filterProductList:Product[]=[]
  searching:string=''
  filterResults(){
    if(!this.searching)
      this.filterProductList=this.products
    this.filterProductList=this.products.filter(
      list=>list.productName?.toLowerCase().includes(this.searching.toLowerCase())
    )
  }
}
