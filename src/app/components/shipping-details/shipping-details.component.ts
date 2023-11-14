import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }
  

}
