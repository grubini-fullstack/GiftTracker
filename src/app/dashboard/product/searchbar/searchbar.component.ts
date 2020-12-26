import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  public status = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log('I am searching this')
    console.log('chuu pressedd!!')
  }
  onEnable() {
    this.status = !this.status;
  }

}
