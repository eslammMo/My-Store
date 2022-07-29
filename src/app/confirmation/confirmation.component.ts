import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
name:any='';
price:any='';

  constructor(private Client:CartService) { }

  ngOnInit(): void {
    //set User Details
    this.name=this.Client.getName();
    this.price=this.Client.getCountTotal();
  }
  // Complete the process successfully and return the page to defult
  endProces(){
    this.Client.paid();
  }
  

}
