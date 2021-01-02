import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss']
})
export class RetailerComponent implements OnInit {
  wishlist = false;
  watchlist = false;
  inStock = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(icon: string) {
    if (icon === 'heart') {
      this.wishlist = !this.wishlist;
    } else {
      this.watchlist = !this.watchlist;
    }
  }

}
