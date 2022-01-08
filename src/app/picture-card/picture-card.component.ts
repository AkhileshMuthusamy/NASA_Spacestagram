import { Component, Input, OnInit } from '@angular/core';
import {PictureData} from '../shared/objects/global-object';

@Component({
  selector: 'shopify-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  @Input()
  data!: PictureData;

  constructor() { }

  ngOnInit(): void {
  }

}
