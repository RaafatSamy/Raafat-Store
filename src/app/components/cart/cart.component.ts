import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any;

  constructor(private cartServ : CartService) { }

  ngOnInit(): void {
    this.cartServ.getProducts().subscribe(res=>{
      this.products = res
    })
  }

  remove(product:any){
      this.cartServ.removeItem(product)
  }
}
