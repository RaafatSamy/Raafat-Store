import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notificationNumber :number=0;

  constructor(private cartServ : CartService) { }

  ngOnInit(): void {
      this.cartServ.getProducts().subscribe(res=>{
        this.notificationNumber = res.length
      })
  }

}
