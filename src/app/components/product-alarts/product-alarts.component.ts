import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/Core/product';

@Component({
  selector: 'app-product-alarts',
  templateUrl: './product-alarts.component.html',
  styleUrls: ['./product-alarts.component.css']
})
export class ProductAlartsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
