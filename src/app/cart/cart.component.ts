import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productDetail: Product | undefined
  cartList: Cart[] = []
  // InStock: number = 0
  constructor(private router: ActivatedRoute,
    private prod: ProductService,
    private cartService: CartService,private Router:Router) {
    this.cartList = cartService.getCartAll()
    this.setCart()
  }
  ngOnInit(): void {
    let id = String(this.router.snapshot.params['id'])
    this.prod.getproductId(id).subscribe(data => {
      this.productDetail = data;

    })
    // this.InStock = this.productDetail?.inStock!
  }
  Add() {
    this.cartService.addCart(this.productDetail?.id!, this.productDetail);
    // this.InStock = this.cartService.getInStock(this.productDetail?.id!)!
  }
  ItemCount() {
    return this.cartService.totalItems()
  }
  ItemSum() {
    return this.cartService.Total()
  }
  Remove(index: number) {
    this.cartService.RemoveCart(index)
  }
  DeleteAll() {
    this.cartService.DeleteAllCart()
  }
  setCart(){
    this.cartList=this.cartService.getCartAll();
  }
}
