import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Items } from '../models/Items';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any[]=[];
  total:any=0;
  ClientName:any='';

  constructor(private serviceUsser:CartService,private send :Router) {

   }

  ngOnInit(): void {
//get Products Data from Service
this.cartItems=this.serviceUsser.cartProductget;
this.total=this.serviceUsser.getCountTotal();
  }

changeItemCount(){
  //update total Price
  this.total=this.serviceUsser.getCountTotal();
  //update cart  service 
  this.cartItems=this.serviceUsser.cartProductget;
}
//pass client name to confirmation page
sendClientName(){
  this.serviceUsser.setName(this.ClientName);
  this.send.navigate(["/confirmation"])
}
deleteProduct(index:any){
  alert(this.cartItems[index].name + "has been deleted");
  this.serviceUsser.delete(index);
  this.changeItemCount();
}
}
