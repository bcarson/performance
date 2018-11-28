import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { NgPerfume, PerfumeAfterViewInit } from 'perfume.js/angular';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@PerfumeAfterViewInit('ProductsListComponent')
export class ProductsListComponent implements AfterViewInit {
  @Input() products: any[];
  ngAfterViewInit() {}
}
