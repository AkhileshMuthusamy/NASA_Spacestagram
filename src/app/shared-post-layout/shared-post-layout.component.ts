import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {DataService} from '../services/data.service';
import {PictureData} from '../shared/objects/global-object';

@Component({
  selector: 'shopify-shared-post-layout',
  templateUrl: './shared-post-layout.component.html',
  styleUrls: ['./shared-post-layout.component.scss']
})
export class SharedPostLayoutComponent implements OnInit, OnDestroy {

  $subscription!: Subscription;
  data!: PictureData;

  constructor(private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const date = routeParams.get('date');

    if (date) {
      this.dataService.loadAPODByDate(date);
    }

    this.subscribeSettings();
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }

  subscribeSettings(): void {
    this.$subscription = this.dataService.getAPODByDate().subscribe((responseData: PictureData | null) => {
      if (responseData) {
        this.data = responseData;
      }
    });
  }

}
