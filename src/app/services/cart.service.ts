import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem:any=[];
  productList= new BehaviorSubject<any>([])

  constructor() { }

  getProducts(){
   return this.productList.asObservable()
  }

  setProducts(product:any){
    this.cartItem.push(...product);
    this.productList.next(product)
  }

  addToCart(product:any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
  }

  removeItem(product:any){
    this.cartItem.map((a:any, index:any)=>{
      if(product.id === a.id){
          this.cartItem.splice(index,1)
      }
    })
  }

}
