import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

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
  
  startDate = new FormControl('');
  endDate = new FormControl('');

  today: number = Date.now();

  get formValid() {
    return this.startDate.valid && this.endDate.valid
  }

  constructor() { }

  ngOnInit(): void {
    this.startDate.valueChanges.subscribe((value) => {
      this.endDate.setErrors(null);

      if (this.convertStringToDate(value) > this.convertStringToDate(this.endDate.value)) {
        this.startDate.setErrors({
          'invalidDate': true
        });
      }
    });

    this.endDate.valueChanges.subscribe((value) => {
      this.startDate.setErrors(null);

      if (this.convertStringToDate(value) < this.convertStringToDate(this.startDate.value)) {
        this.endDate.setErrors({
          'invalidDate': true
        });
      }
    });
  }

  closeModal() {
    this.startDate.setValue('');
    this.endDate.setValue('');
    this.close.emit(true);
  }

  convertStringToDate(dateStr: string) {
    let offsetDate = new Date(dateStr);
    let currentOffset = new Date().getTimezoneOffset();
    let currentOffsetInMilliSeconds = currentOffset * 60 * 1000

    return new Date(offsetDate.getTime() + currentOffsetInMilliSeconds)
  }

}
