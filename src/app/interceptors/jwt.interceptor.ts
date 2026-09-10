import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { ApiService } from '../services/api.service';
import { catchError, switchMap } from 'rxjs/operators';
import { SESSION_EXPIRED_MESSAGE, isNetworkStatusZero, toNetworkHttpError } from '../utils/http-network.util';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private apiService: ApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isInBlockedList(request.url)) {
      return next.handle(request);
    }

    return next.handle(this.addToken(request)).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          if (isNetworkStatusZero(err) || err.statusText === 'Timeout') {
            return throwError(() => toNetworkHttpError(err, request.url));
          }

          if (err.status === 401) {
            return this.handle401Error(request, next);
          }
        }

        return throwError(() => err);
      })
    );
  }

  private isInBlockedList(url: string): boolean {
    return url === `${environment.api_url}/Login/Autenticacion` || this.apiService.whiteList.includes(url);
  }

  private addToken(req: HttpRequest<any>) {
    if (this.apiService.currentAccessToken) {
      return req.clone({
        headers: new HttpHeaders({
          Authorization: this.apiService.currentAccessToken
        })
      });
    }

    return req;
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.apiService.refreshSessionSilently()).pipe(
      switchMap((sessionRefreshed) => {
        if (sessionRefreshed) {
          return next.handle(this.addToken(request));
        }

        return throwError(() => new HttpErrorResponse({
          status: 401,
          statusText: 'Unauthorized',
          url: request.url,
          error: { Message: SESSION_EXPIRED_MESSAGE }
        }));
      })
    );
  }
}
