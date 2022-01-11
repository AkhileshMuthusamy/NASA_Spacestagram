import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PictureData} from '../shared/objects/global-object';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAPODByDate(date: string): Observable<PictureData> {
    return this.httpClient.get<PictureData>(`${this.apiUrl}&date=${date}`);
  }

  
  getAPODByStartEndDate(startDate: string, endDate: string): Observable<Array<PictureData>> {
    if (!endDate) {
      return this.httpClient.get<Array<PictureData>>(`${this.apiUrl}&start_date=${startDate}`);
    } else {
      return this.httpClient.get<Array<PictureData>>(`${this.apiUrl}&start_date=${startDate}&end_date=${endDate}`);
    }
  }

  getAPODByCount(count: number): Observable<Array<PictureData>> {
    return this.httpClient.get<Array<PictureData>>(`${this.apiUrl}&count=${count}`);
  }

}
