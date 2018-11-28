import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgPerfume, PerfumeModule } from 'perfume.js/angular';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsInputComponent } from './products-input/products-input.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FakeService } from './fake.service';
import { FilterPipe } from './filter.pipe';

const perfumeConfig = {
  firstPaint: true,
  firstContentfulPaint: true,
  firstInputDelay: true,
};

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsInputComponent,
    ProductsListComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, FormsModule, PerfumeModule.forRoot(perfumeConfig)],
  providers: [FakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
