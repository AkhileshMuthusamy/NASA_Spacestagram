import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PictureData} from '../shared/objects/global-object';
import {ApiService} from './api.service';
import {DateService} from './date.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private $isAPODByDateLoading: boolean = false;
  private apodByDateData = new BehaviorSubject<PictureData | null>(null);
  
  private $isAPODLoading: boolean = false;
  private apodData = new BehaviorSubject<[PictureData] | null>(null);

  public showNotification: boolean = false;
  public notificationMessage: string = '';

  constructor(private apiService: ApiService, private dateService: DateService) { }

  get isAPODByDateLoading(): boolean {
    return this.$isAPODByDateLoading;
  }

  get isAPODLoading(): boolean {
    return this.$isAPODLoading;
  }

  public getAPODByDate(): Observable<PictureData | null> {
    return this.apodByDateData.asObservable();
  }

  public getAPOD(): Observable<[PictureData] | null> {
    return this.apodData.asObservable();
  }

  loadAPODByDate(date: string): void {
    this.$isAPODByDateLoading = true;
    this.apiService.getAPODByDate(date).subscribe({
      next: (response) => {
        console.log(response);
        this.apodByDateData.next(response);
        this.$isAPODByDateLoading = false;
      },
      error: () => {
        this.$isAPODByDateLoading = false;
      }
    });
  }

  loadAPOD(startDate: string | null, endDate: string | null): void {

    if (!startDate) {
      return
    }

    this.$isAPODLoading = true;
    this.apiService.getAPODByStartEndDate(startDate, endDate).subscribe({
      next: (response) => {
        console.log(response);
        this.apodData.next(response);
        this.$isAPODLoading = false;
      },
      error: () => {
        this.$isAPODLoading = false;
      }
    });
  }

  loadAPODLastNDays(days: number) {
    this.loadAPOD(this.dateService.getNthPreviousDate(days), this.dateService.todayStr());
  }

  displayNotification(message: string) {
    this.notificationMessage = message;
    this.showNotification = true;
  }
}
