import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private dataService: DataService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          console.log(error);
          if (error.status === 400) {
            this.dataService.displayNotification(error.error.msg);
          } else {
            this.dataService.displayNotification('Error connecting to server. Please try again.');
          }
        }

        return throwError(() => new Error(error.message));
      })
    )
  }
}
