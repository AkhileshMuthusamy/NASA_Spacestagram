import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {PictureData} from '../shared/objects/global-object';

@Component({
  selector: 'shopify-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit, AfterViewInit {

  @Input()
  data!: PictureData;

  isModelOpened = false;
  // @ViewChild('modelDialog')
  // modelDialog!: ElementRef<HTMLDialogElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.closeModel();
  }

  showModel() {
    this.isModelOpened = true;
  }

  closeModel() {
    this.isModelOpened = false;
    // console.dir(this.modelDialog);
    // console.log(this.modelDialog.nativeElement.addEventListener('show'));
  }

}
