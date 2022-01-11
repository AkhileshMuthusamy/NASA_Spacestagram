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
  
  private $isAPODByLast10Loading: boolean = false;
  private apodByLast10Data = new BehaviorSubject<[PictureData] | null>(null);

  constructor(private apiService: ApiService) { }

  get isAPODByDateLoading(): boolean {
    return this.$isAPODByDateLoading;
  }

  public getAPODByDate(): Observable<PictureData | null> {
    return this.apodByDateData.asObservable();
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
}
