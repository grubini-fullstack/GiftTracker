import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {
  public menunames: string[] = ['Products', 'Wish List', 'Watch List', 'Birthday Tracker', 'Account'];

  constructor() { }

  ngOnInit(): void {
  }

}
