import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TranslateModule} from "@ngx-translate/core";
import {provideTranslation} from "./config/i18n/translate-loader.config";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {networkInterceptorFn} from "./interceptors/network-interceptor/network-interceptor";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([networkInterceptorFn]))
  ]
};
