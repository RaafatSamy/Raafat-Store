import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any
  constructor(private apiServ : ApiService, private cartServ : CartService) { }

  ngOnInit(): void {
    this.apiServ.getProducts().subscribe(res=>{
        this.products = res
    })
  }

  addProductToCart(product:any){
      this.cartServ.addToCart(product)
      console.log(product)
  }

}
