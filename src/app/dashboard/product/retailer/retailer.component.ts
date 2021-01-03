import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/shared/model/item.model';
import { AuthService } from 'src/shared/service/auth.service';
import { ProductService } from 'src/shared/service/product.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss']
})
export class RetailerComponent implements OnInit {
  @Input() item: Item;
  wishlist = false;
  watchlist = false;
  isAuthenticated = false;

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      if (user.session.id !== '') {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  changeColor(category: string) {
    if (this.isAuthenticated) {
      if (category === 'wishlist') {
        this.wishlist = !this.wishlist;
      } else {
        this.watchlist = !this.watchlist;
      }
      this.productService.addProduct(category, this.item);
    }
  }
  onBuyNow(url: string) {
    window.location.href = url;
  }
}
