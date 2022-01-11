import {Component, Input, OnInit} from '@angular/core';
import {PictureData} from '../shared/objects/global-object';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'shopify-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  @Input()
  data!: PictureData;

  readonly MAX_CHAR = 55;
  sliceLength = this.MAX_CHAR;
  readMore = false;
  showImageModal = false;
  showShareModal = false;
  isLiked = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  showImageModel(): void {
    this.showImageModal = true;
  }

  showShareModel(): void {
    this.showShareModal = true;
  }

  videoURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
  }
}
