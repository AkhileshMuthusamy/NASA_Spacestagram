import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHeaderModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayHeaderModal(): void {
    this.showHeaderModal = true;
  }

}
