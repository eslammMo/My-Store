import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Items } from '../models/Items';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()  item:Items;
  @Output() selectedProduct: EventEmitter<Items>=new EventEmitter;
   addToCart: any[]=[];

  constructor(private cart:CartService ) {
    this.item={
        id:0,
        name:'',
        price:0,
        url:'',
        description:'',
        count:0

    }
    
   }


  ngOnInit(): void {

  }
  //pass product details to parent(product list component)
  sendDetails(item:any){
    this.selectedProduct.emit(item);
  }

   add(){
    this.selectedProduct.emit(this.item);
  }

}
