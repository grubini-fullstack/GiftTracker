import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/model/item.model';
import { AuthService } from 'src/shared/service/auth.service';
import { ProductService } from 'src/shared/service/product.service';
import { map, tap, catchError, take } from 'rxjs/operators';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist: Item[];

  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit(): void {
    this.authService.user.pipe(
      map(user => {
        return user.wishlist.map((item: any) => new Item(item._name, 'Best Buy', item._regularPrice, item._salePrice,
          item._condition, item._details, item._freeShipping, item._addToCartUrl, item._color, item._features, item._includedItemList, item._onlineAvailability, item._modelNumber, item._image))
      })
    ).subscribe((wishlist) => this.wishlist = wishlist);
  }

}
