import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent {
  @Input() imageSrc!: string;
  @Input() description!: string;

  constructor() {}

  
}
