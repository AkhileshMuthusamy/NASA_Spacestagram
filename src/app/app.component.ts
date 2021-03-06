import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'shopify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spacestagram';

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
