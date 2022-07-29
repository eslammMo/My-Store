import { Injectable } from '@angular/core';
import { Items } from '../models/Items';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Items[]=[];
  totalPrice:any=0;
  clientName:any='';
//get choosen products from product list
  setCartProduct(item: Items){
      if(this.cart.length>0){
        for(let index=0; index<this.cart.length; index++){
          if(item.id === this.cart[index].id){
            alert("this Product already in cart")
            break;
          }else{
            this.cart.push(item);
            alert('Added to cart');
          }
        }
      }else{
        this.cart.push(item);
        alert('Added to cart');
         }
       };
//add choosen product from product details

    delete(index:any){
      this.cart.splice(index,1);
    }
  //sharing cart products with other components
  get cartProductget(){
    return this.cart;
  }
  //calculate price of cart products
  getCountTotal(){
    this.totalPrice=0;
        for(let index=0;index < this.cart.length; index++){
        this.totalPrice+=this.cart[index].price*this.cart[index].count;
    }
    return this.totalPrice
  }
  //set name of client
   setName(name:any){
    this.clientName = name;
  };
  //share name of client
  getName(){
    return this.clientName;
  }
  //To confirm the completion of the process
  paid(){
    this.cart=[];
  }



  constructor() { }
}
