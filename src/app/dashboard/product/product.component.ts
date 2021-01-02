import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Item } from 'src/shared/model/item.model';
import { ProductService } from 'src/shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Item[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.items.subscribe(items => {
      console.log(items);
      this.products = items;
    });
  }

}
