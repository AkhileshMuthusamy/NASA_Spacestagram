import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'shopify-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  @Input()
  imageUrl!: string;
  @Input()
  show: boolean = false;
  @Output() 
  close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.show = false;
    this.close.emit(true);
  }

}
