import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  categories:any
  searchTrem :any
  constructor(private apiServ : ApiService, private cartServ : CartService) { }

  ngOnInit(): void {
    this.apiServ.getProducts().subscribe(res=>{
        this.products = res;
        this.categories = res;
        this.products.forEach((a:any) => {
            if( a.category ===" men's clothing " || a.category ==="women's clothing"){
              a.category = "fashion"
            }
            Object.assign(a,{quantity:1, total:a.price})
        });
    })

      this.cartServ.search.subscribe((value:any)=>{
      this.searchTrem = value
    })
  }

  addProductToCart(product:any){
      this.cartServ.addToCart(product)
  }

  filter(category:any){
    this.categories = this.products.filter((a:any)=>{
      if(a.category == category || category ==''){
        return a
      }
    })
  }

}
