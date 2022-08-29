import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {



  @Input() collectionEnfant!:Order[];

  @Input() headersEnfant!: string[];

  constructor() { }

  ngOnInit(): void {

   // console.log(this.collectionEnfant,"depuis ngOnInit")
   console.log(this.headersEnfant,"TableauHeaders")
  }

  ngOnChanges(){
 //   console.log(this.collectionEnfant,"Tableau")

  }
}
