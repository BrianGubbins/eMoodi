import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  currentForecast() {

    // default coords
    let lat: number = 53
    let lng: number= -9

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
      // console.log("Geolocation is not supported by this browser.");
    }

    function geoSuccess(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      // console.log("lat:" + lat + " lng:" + lng);
    }

    function geoError() {
      // console.log("Geocoder failed.");
    }

    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0d84709db8c9b163c1536a07b36f1f35/' + lat.toString() + "," + lng.toString() + "?exclude=hourly,currently,minutely,flags,alerts&units=si")
      .map(res => res.json());
  }


}