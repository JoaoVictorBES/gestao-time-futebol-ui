import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const meuhttpInterceptor: HttpInterceptorFn = (request, next) => {

  let router = inject(Router);

  const publicRoutes = ['/api/user/cadastro'];

  const isPublicRoute = publicRoutes.some((route) => request.url.includes(route));

  if (!isPublicRoute) {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + token },
      });
    }
  }


  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {


        if (err.status === 401) {
          alert('401 - tratar aqui');
          router.navigate(['/login']);
        } else if (err.status === 403) {
          alert('403 - tratar aqui');
		  router.navigate(['/login']);
        } else {
          console.error('HTTP error:', err);
        }


      } else {
        console.error('An error occurred:', err);
      }

      return throwError(() => err);
    })
  );
};
