import {DatePipe} from '@angular/common';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private datePipe: DatePipe) { }

  convertStringToDate(dateStr: string): Date {
    let offsetDate = new Date(dateStr);
    let currentOffset = new Date().getTimezoneOffset();
    let currentOffsetInMilliSeconds = currentOffset * 60 * 1000

    return new Date(offsetDate.getTime() + currentOffsetInMilliSeconds)
  }

  todayStr(): string | null {
    let now: number = Date.now();
    return this.datePipe.transform(now, 'YYYY-MM-dd');
  }
}
