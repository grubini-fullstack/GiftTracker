import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Item } from '../model/item.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ProductService implements OnInit {
  items = new Subject<Item[]>();
  private signedInUser: User;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {

  }

  search(keyword: string) {
    if (keyword.length > 0) {
      this.http.get<any>(
        'http://127.0.0.1:3000/product/search',
        { params: { keyword } }
      )
        .pipe(
          take(1),
          map(products => {
            return products.map((item: any) => {
              return new Item(item.name, 'Best Buy', item.regularPrice, item.salePrice, item.condition, item.details, item.freeShipping, item.addToCartUrl, item.color, item.features, item.includedItemList, item.onlineAvailability, item.modelNumber, item.image)
            })
          })
        )
        .subscribe((items) => this.items.next(items));
    }
  }
  addProduct(category: string, item: Item) {
    this.authService.user.pipe(take(1)).subscribe(user => {
      // user.session.id !== ''
      if (true) {
        this.http.post<any>(
          'http://127.0.0.1:3000/product/addorupdate',
          { category, item, session: user.session }
        )
          .pipe(
            take(1)
          ).subscribe(result => console.log(result));
      }
    });
  }
  getWishList() {
    this.authService.user
      .pipe(take(1))
      .subscribe(user => {
        this.http.post<any>(
          'http://127.0.0.1:3000/product/wishlist',
          { session: user.session }
        )
          .pipe(
            take(1),
            map(result => result.wishlist),
            map(wishlist => {
              return wishlist.map((item: any) => {
                return new Item(item._name, 'Best Buy', item._regularPrice, item._salePrice, item._condition, item._details, item._freeShipping, item._addToCartUrl, item._color, item._features, item._includedItemList, item._onlineAvailability, item._modelNumber, item._image)
              })
            })
          )
          .subscribe(wishlist => this.items.next(wishlist));
      });

  }
}
