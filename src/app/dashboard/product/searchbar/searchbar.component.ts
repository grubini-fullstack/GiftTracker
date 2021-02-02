import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/shared/service/product.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  public status = true;
  public keyword = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.productService.search(this.keyword);
    this.keyword = '';
  }
  onEnable() {
    this.status = !this.status;
  }

}
