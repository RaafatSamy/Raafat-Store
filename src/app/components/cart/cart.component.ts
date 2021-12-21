import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any;
  grandTotalPrice:number=0
  constructor(private cartServ : CartService) { }

  ngOnInit(): void {
    this.cartServ.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotalPrice = this.cartServ.getAllPrice()
    })

  }

  remove(product:any){
      this.cartServ.removeItem(product)
  }

  removeAll(){
    this.cartServ.removeAllProducts()
  }


}
