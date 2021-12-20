import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api:string="https://fakestoreapi.com/products";

  constructor(private http : HttpClient) { }

  getProducts():Observable<any>{
    return  this.http.get(this.api).pipe(map(res=>{
      return res as any
    }))
  }

}
