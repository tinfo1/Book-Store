import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { } 
  protected products: Product[] = []
  AutoId() {
    var max = 1
    this.products.forEach(item => {
      if (item.id > max)
        max = item.id
    })
    return max + 1
  }

  private URL = 'http://localhost:3000/product';
  
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL)
  }
  getproductId(id: string) {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }
  searchId(id: number) {
    return this.products.find(item => item.id == id)
  }
  AddProduct(frmProduct: any): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.URL}`, frmProduct)
  }
  EditProduct(id: number) {
    return this.products[id]
  }
  UpdateProduct(id: number, frmProduct: any): Observable<Product[]> {
    return this.http.put<Product[]>(`${this.URL}/${id}`, frmProduct)
  }
  DeleteProduct(id: number): Observable<Product[]> {
    return  this.http.delete<Product[]>(`${this.URL}/${id}`)
  }
}
