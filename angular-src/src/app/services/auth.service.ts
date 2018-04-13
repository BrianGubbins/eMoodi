import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { WeatherService } from './weather.service';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev: boolean;

  constructor(private http: Http, private weatherServ: WeatherService) {
    this.isDev = true; // Change to true before deployment
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('users/register');
    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('users/authenticate');
    return this.http.post(ep, user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  setWeather() {

    // var lat;
    // var lng;
    var weatherFormat;

    this.weatherServ.currentForecast(40, -72).subscribe(weather => {

      var forecast = weather;
      weatherFormat = {
        cloudCover: forecast.daily.data[0].cloudCover,
        rain: forecast.daily.data[0].precipProbability,
        temp: forecast.daily.data[0].temperatureMax,
        summary: forecast.daily.data[0].summary
      }

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let ep = this.prepEndpoint('users/addweather');
      return this.http.post(ep, weatherFormat, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          if (data.success) {
          } else {
            console.log('error')
          }
        });
    },
      err => {
        console.log(err);
        return false;
      });
  }

  getWeather() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('users/weatherGET');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }



  setMood(mood) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('users/mood');
    return this.http.post(ep, mood, { headers: headers })
      .map(res => res.json());
  }

  getMood() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('users/moodGET');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return ep;
    } else {
      return 'http://localhost:8080/' + ep;
    }
  }
}