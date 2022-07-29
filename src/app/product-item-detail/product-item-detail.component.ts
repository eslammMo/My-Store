import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from '../models/Items';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product:Items=new Items;
  productId:any;
  proudctList:Items[]=[]; 


  constructor(private route: ActivatedRoute , private http:ItemService ,private cart : CartService) {

   }

  ngOnInit(): void {
    //get product id from url pass it fo select function
    this.productId=this.route.snapshot.paramMap.get("id");

    this.http.getItemId(this.productId).subscribe(res =>{
      this.product=res;
      this.product.count=1})

  }

// get product details from item service
  selectedProduct(){
    this.http.getItemId(this.productId).subscribe(res =>{
       this.product=res;
      console.log(this.product);
        });
  }
  //add product to cart
  addProduct(item:any){
    this.cart.setCartProduct(item);
  }
  
}
