import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  public menuitems: string[] = ['Products', 'Wish List', 'Watch List', 'Birthday Tracker', 'Account'];
  constructor() { }

  ngOnInit(): void {
  }

}
