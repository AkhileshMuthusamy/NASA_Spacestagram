import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PictureData} from '../shared/objects/global-object';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private $isAPODByDateLoading: boolean = false;
  private apodByDateData = new BehaviorSubject<PictureData | null>(null);
  
  private $isAPODLoading: boolean = false;
  private apodData = new BehaviorSubject<[PictureData] | null>(null);

  constructor(private apiService: ApiService) { }

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

  loadAPOD(startDate: string, endDate?: string): void {
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
}
