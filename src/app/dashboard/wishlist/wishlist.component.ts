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
    this.productService.getWishList();
    this.productService.items.subscribe(items => {
      this.wishlist = items;
    });
  }

}
