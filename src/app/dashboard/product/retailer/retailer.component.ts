import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/shared/model/item.model';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.scss']
})
export class RetailerComponent implements OnInit {
  @Input() item: Item;
  wishlist = false;
  watchlist = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeColor(icon: string) {
    if (icon === 'heart') {
      this.wishlist = !this.wishlist;
    } else {
      this.watchlist = !this.watchlist;
    }
  }
  onBuyNow(url: string) {

    console.log('this is the url , ', url)
    window.location.href = url;
  }
}
