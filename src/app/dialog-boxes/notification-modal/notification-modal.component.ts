import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'shopify-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.scss']
})
export class NotificationModalComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
