import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-input',
  templateUrl: './products-input.component.html',
  styleUrls: ['./products-input.component.css'],
})
export class ProductsInputComponent {
  @Output() search = new EventEmitter();
}
