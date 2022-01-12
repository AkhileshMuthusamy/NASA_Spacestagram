import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from 'src/app/services/data.service';
import {DateService} from 'src/app/services/date.service';

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

  constructor(private dateService: DateService, private dataService: DataService) { }

  ngOnInit(): void {
    this.startDate.valueChanges.subscribe((value) => {
      this.endDate.setErrors(null);

      if (this.dateService.convertStringToDate(value) > this.dateService.convertStringToDate(this.endDate.value)) {
        this.startDate.setErrors({
          'invalidDate': true
        });
      }
    });

    this.endDate.valueChanges.subscribe((value) => {
      this.startDate.setErrors(null);

      if (this.dateService.convertStringToDate(value) < this.dateService.convertStringToDate(this.startDate.value)) {
        this.endDate.setErrors({
          'invalidDate': true
        });
      }
    });
  }

  closeModal(): void {
    this.startDate.setValue('');
    this.endDate.setValue('');
    this.close.emit(true);
  }

  loadData(): void {
    if (this.startDate.value) {
      this.dataService.loadAPOD(this.startDate.value, this.endDate.value);
      this.closeModal();
    } else {
      this.startDate.setErrors({
        'invalidDate': true
      });
    }

  }

  loadDataLastNDays(days: number): void {
    this.dataService.loadAPODLastNDays(days);
    this.closeModal();
  }

}
