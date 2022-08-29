import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//decorateur

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private http: HttpClient) {


  }
  
  getData(){
    return this.http.get('http://localhost:3000/orders');
  }

  sumUp(a:number,b: number){
    return a+b;
  }
}
