import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from '../services/data.service';
import {PictureData} from '../shared/objects/global-object';

@Component({
  selector: 'shopify-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  $subscription!: Subscription;
  data!: PictureData[];

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.loadAPODLastNDays(5);
    this.subscribeSettings();
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }

  subscribeSettings(): void {
    this.$subscription = this.dataService.getAPOD().subscribe((responseData: PictureData[] | null) => {
      if (responseData) {
        this.data = responseData.reverse();
      }
    });
  }


}
