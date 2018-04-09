import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WeatherService {

  constructor(private http:Http) { }

  currentForecast(lat: number, lng: number) {
    return this.http.get('https://crossorigin.me/https://api.darksky.net/forecast/0d84709db8c9b163c1536a07b36f1f35/'+lat.toString()+","+lng.toString()+"?exclude=hourly,currently,minutely,flags,alerts&units=si")
      .map(res => res.json());
  }


}