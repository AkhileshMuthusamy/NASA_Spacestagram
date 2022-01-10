import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'shopify-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {

  @Input()
  show: boolean = false;
  @Output() 
  close: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit(true);
  }

}
