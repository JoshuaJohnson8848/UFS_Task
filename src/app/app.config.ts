import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ufsInterceptorInterceptor } from './interceptor/ufs-interceptor.interceptor';
import { ngrokInterceptor } from './interceptor/ngrok.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([ufsInterceptorInterceptor, ngrokInterceptor]))]
};
