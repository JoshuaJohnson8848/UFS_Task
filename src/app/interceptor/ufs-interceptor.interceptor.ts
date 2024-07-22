import { HttpInterceptorFn } from '@angular/common/http';

export const ufsInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyMTAzODg1N30.9Hrh7S7bZmUgVNqVv_DEDflXrufteUJjS6OXqtQPAfk'

  const authReq = req.clone({
    headers: req.headers.set('Authorization', token),
  })

  return next(authReq);
};
