/// <reference path="../typings/index.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .then((success: any) => console.log('App bootstraped'))
    .catch((error: any) => console.error(error));