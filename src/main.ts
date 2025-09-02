import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
// Si ya instalaste @angular/animations puedes dejarla, si no, quítala
// import { provideAnimations } from '@angular/platform-browser/animations';

import { App } from './app/app';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Factory: carga JSON desde /assets/i18n/
export function HttpLoaderFactory(http: HttpClient) {
  // OJO: sin el "./" inicial, usa 'assets/...'
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
  // Si por cualquier motivo SIGUE el error de tipado, usa:
  // return new (TranslateHttpLoader as any)(http, 'assets/i18n/', '.json');
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    // provideAnimations(), // <- solo si tienes @angular/animations instalado
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
}).catch(console.error);
