import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable()
export class FakeService {
  _products = [];
  constructor() {}

  getProducts(n?: number) {
    if (!n) n = 10; // default 10 products
    for (var i = 0; i < n; i++) {
      this._products.push(
        faker.commerce.color() + ' ' + faker.commerce.product()
      );
    }
    return this._products;
  }
}
