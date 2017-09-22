//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'temperature',
   templateUrl: './src/temperature.html',
})
export class Temperature {
  //int data = [1,2,3,4,5,6,7,8,9,10];
  constructor(private http: Http) {
    http.get('https://infinite-mountain-53391.herokuapp.com/temperature')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => console.log(JSON.stringify(data)));
  }
}

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ Temperature ],
  bootstrap: [ Temperature ]
})
export class TemperatureModule {}