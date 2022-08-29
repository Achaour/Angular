import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {


  titleParent: string= 'Titre depuis Parent'

  collection!: any;

  // en-têtes du tableau de type array
  public headers = [
    'Action',
    'Type',
     'Client',
     'NbJours',
     'Tjm HT',
     'Total HT',
     'Total TTC',
     'State' ]

  constructor(
    private ordersService: OrdersService
  ) {
      this.ordersService.getData().subscribe(data=>{
      this.collection=data;

      })


 //   console.log(this.ordersService.sumUp(1,2),'fonction sumUp')
      }

  ngOnInit(): void {
  }

}
