//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app';
import {TemperatureModule} from './temperature';

platformBrowserDynamic().bootstrapModule(AppModule)
platformBrowserDynamic().bootstrapModule(TemperatureModule)