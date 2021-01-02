import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Item } from '../model/item.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  items = new Subject<Item[]>();

  constructor(private http: HttpClient) { }

  search(keyword: string) {
    if (keyword.length > 0) {
      this.http.get<any>(
        'http://127.0.0.1:3000/search/product',
        { params: { keyword } }
      )
        .pipe(
          take(1),
          map(products => {
            return products.map((item: any) => {
              return new Item(item.name, 'Best Buy', item.regularPrice, item.salePrice, item.condition, item.details, item.freeShipping, item.addToCartUrl, item.color, item.features, item.includedItemList, item.onlineAvailability, item.modelNumber, item.image)
            })
          }),
        )
        .subscribe((items) => this.items.next(items));
    }
  }
}