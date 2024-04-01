import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() productList: Product[] = []
  showRating(event: any) {
    alert(`${event}`)
  }
  formProduct = new FormGroup({
    // productId: new FormControl<number>(1),
    productName: new FormControl<string>(''),
    productCode: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>('')
  })
  ngOnInit(): void {
    this.formProduct.controls['imageUrl'].setValue('./assets/images')
    this.prod.getProduct().subscribe((data) => {
      this.productList = data
    })
  }
  file: string = ''
  IsAdd: number = 1
  IsUpdate: number = 0
  constructor(private prod: ProductService) {
    prod.getProduct().subscribe(data => {
      this.productList = data
    });
  }
  Add() {
    // this.formProduct.controls.productId.setValue(this.prod.AutoId())

    this.formProduct.controls['imageUrl'].setValue(this.file)
    // console.log(this.formProduct.value)
    this.prod.AddProduct(this.formProduct.value).subscribe(res => {
      this.ngOnInit()
    })

  }
  id: any
  Edit(index: number) {
    this.id = this.productList[index].id
    this.formProduct.controls.productName.setValue(this.productList[index].productName)

    this.formProduct.controls.releaseDate.setValue(this.productList[index].releaseDate)
    this.formProduct.controls.price.setValue(this.productList[index].price)
    this.formProduct.controls.description.setValue(this.productList[index].description)
    this.formProduct.controls['imageUrl'].setValue(this.productList[index].imageUrl)
    this.file = this.productList[index].imageUrl
  }
  Update() {
    this.formProduct.controls['imageUrl'].setValue(this.file)
    this.prod.UpdateProduct(this.id, this.formProduct.value).subscribe(res=>{
      // console.log(res);
      this.ngOnInit()
    })
  }
  Delete(index: number) {
    let id = this.productList[index].id
    this.prod.DeleteProduct(id).subscribe(res=> {
      // console.log(res);
      this.ngOnInit()
    })
  }
  onChange(event: any) {
    let str = event.target.files[0].name
    this.file = './assets/images/' + str
  }
}
