import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'shopify-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showHeaderModal = false;
  @Input()
  isMainLayout: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayHeaderModal(): void {
    this.showHeaderModal = !this.showHeaderModal;
  }

  navigate() {
    this.router.navigate(['/']);
  }

}
