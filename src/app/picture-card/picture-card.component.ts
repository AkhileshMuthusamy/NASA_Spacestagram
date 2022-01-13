import {Component, Input, OnInit} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {DataService} from '../services/data.service';
import {PictureData} from '../shared/objects/global-object';

@Component({
  selector: 'shopify-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  @Input()
  data!: PictureData;

  readonly MAX_CHAR_ON_MOBILE = 55;
  readonly MAX_CHAR_ON_PC = 170;
  sliceLength = this.MAX_CHAR_ON_MOBILE;
  readMore = false;
  showImageModal = false;
  showShareModal = false;
  isLiked = false;

  constructor(private mediaObserver: MediaObserver, private dataService: DataService) { }

  ngOnInit(): void {
    this.mediaObserver.asObservable().subscribe((mediaChange) => {
      const screen = mediaChange[0].mqAlias;
      console.log(screen);
      if ((screen === 'xs') || (screen === 'sm')) {
        this.sliceLength = this.MAX_CHAR_ON_MOBILE;
      } else {
        this.sliceLength = this.MAX_CHAR_ON_PC;
      }
    });

    this.loadLikeStatus();
  }

  showImageModel(): void {
    this.showImageModal = true;
  }

  showShareModel(): void {
    this.showShareModal = true;
  }

  loadLikeStatus(): void {
    this.isLiked = this.dataService.getPostLikeStatus(this.data?.date);
  }

  likePost() {
    if (this.isLiked) {
      this.dataService.unlikePost(this.data.date);
    } else {
      this.dataService.likePost(this.data.date);
    }
    this.loadLikeStatus();
  }


}
