import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {PictureData} from '../shared/objects/global-object';

@Component({
  selector: 'shopify-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit, AfterViewInit {

  @Input()
  data!: PictureData;

  readonly MAX_CHAR = 55;
  sliceLength = this.MAX_CHAR;
  readMore = false;
  showImageModal = false;
  isLiked = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.closeModel();
  }

  showModel() {
    this.showImageModal = true;
  }

  share_fb(url: string) {
    window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'facebook-share-dialog',"width=626, height=436")
  }
}
