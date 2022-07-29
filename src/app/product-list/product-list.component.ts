import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Items } from '../models/Items';
//import {default as product} from '/assets/data.json';
import { HttpClient } from "@angular/common/http";
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  proudctList:Items[]=[]; 
  item: Items = new Items;
  cartProducts:Items[]=[];

  constructor(private http:ItemService ,private cartService :CartService ) {
   }

  ngOnInit(): void {
    
    this.http.getItems().subscribe(data => {
      this.proudctList = data;
      for (let index=0 ;index<this.proudctList.length ;index++){
        const item=this.proudctList[index];
        item.count=1;
      }
    });
  }
    //<!--add(product:Items): void {
    //this.item=product;
    //alert(this.item.name +`has successfully signed in!`);}
    

   addtoCart(item:Items){
    this.cartService.setCartProduct(item);
  }




}
