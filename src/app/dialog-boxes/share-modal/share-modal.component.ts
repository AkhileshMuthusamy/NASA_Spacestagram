import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PictureData} from 'src/app/shared/objects/global-object';

@Component({
  selector: 'shopify-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss']
})
export class ShareModalComponent implements OnInit {

  @Input()
  data!: PictureData;
  @Input()
  show: boolean = false;
  @Output() 
  close: EventEmitter<boolean> = new EventEmitter();

  activeTab = 0;
  copied = false;
  sharePostUrl: string = ''
  
  constructor() { }

  ngOnInit(): void {
    this.sharePostUrl = window.location.protocol + '//' + window.location.host + '/' + this.data.date;
  }

  closeModal() {
    this.close.emit(true);
  }

  switchTab(tabIndex: number): void {
    this.activeTab = tabIndex;
    this.copied = false
  }

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }

  getXY() {
    let x = screen.width/2 - 700/2;
    let y = screen.height/2 - 450/2;
    return [x, y];
  }

  shareOnFb(url: string) {
    this.close.emit(true);
    window.open('https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(url),'facebook-share-dialog','width=700, height=450, left='+ this.getXY()[0]+',top=' + this.getXY()[1])
  }

  shareOnTwitter(url: string) {
    this.close.emit(true);
    let queryParamText = encodeURIComponent(`#spacestagram ${this.data.title}`);
    let queryParamUrl = encodeURIComponent(url);
    window.open(`https://twitter.com/intent/tweet?text=${queryParamText}&url=${queryParamUrl}`, 'twitter-share-dialog', 'width=700, height=450, left='+ this.getXY()[0]+',top=' + this.getXY()[1])
  }

}
