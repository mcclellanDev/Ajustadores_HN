import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { resolveHttpTimeoutMs, toNetworkHttpError } from '../utils/http-network.util';

@Injectable()
export class HttpTimeoutInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeoutMs = resolveHttpTimeoutMs(request.url);

    return next.handle(request).pipe(
      timeout(timeoutMs),
      catchError((error) => {
        if (error?.name === 'TimeoutError') {
          return throwError(() => toNetworkHttpError(error, request.url));
        }
        return throwError(() => error);
      })
    );
  }
}
