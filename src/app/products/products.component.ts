import { AfterViewInit, Component } from '@angular/core';
import { FakeService } from '../fake.service';
import { BehaviorSubject } from 'rxjs';
import { PerfumeAfterViewInit } from 'perfume.js';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
@PerfumeAfterViewInit('ProductsComponent')
export class ProductsComponent implements AfterViewInit {
  public products = this.fakeService.getProducts(1000);
  public filteredProducts = this.products;
  public searchText = new BehaviorSubject<string>('');

  constructor(private fakeService: FakeService) {}
  ngAfterViewInit() {}
  filterProducts(searchText: string) {
    if (!searchText) this.filteredProducts = this.products;
    else
      this.filteredProducts = this.products.filter(p => {
        return p.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
      });
  }
}
