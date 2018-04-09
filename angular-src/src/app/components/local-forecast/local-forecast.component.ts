import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

@Component({
  selector: 'local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  lat: number;
  lng: number;
  forecast: any;
  recipes: any;
  displayRecipe: any;
  pic: String;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    // this.recipe.recipe().subscribe(weather => {
    //   this.recipes = weather;
    //   var searchResults = [];
    //     if(this.recipes.hits.length > 0){
    //       this.recipes.hits.forEach(function(recipe){
    //         searchResults.push(recipe.recipe);
    //       });
    //     }
    //    console.log(searchResults);
    //   this.recipes = searchResults;
    // },
    // err => {
    //   console.log(err);
    //   return false;
    // });
  }

  getForecast() {
  //   this.weather.recipe().subscribe(weather => {
  //       this.recipes = weather;
  //       var searchResults = [];
  //         if(this.recipes.hits.length > 0){
  //           this.recipes.hits.forEach(function(recipe){
  //             searchResults.push(recipe.recipe);
  //           });
  //         }
  //        console.log(searchResults);
  // this.recipes = searchResults;
  //     },
  //     err => {
  //       console.log(err);
  //       return false;
  //     });
  //this.image= "https://www.edamam.com/web-img/262/262b4353ca25074178ead2a07cdf7dc1.jpg";
  }


  showSearchRecipe(recipe){
    this.displayRecipe = recipe;
  }

  /// Helper to make weather icons work
  /// better solution is to map icons to an object 
  // weatherIcon(icon) {
  //   switch (icon) {
  //     case 'partly-cloudy-day':
  //       return 'wi wi-day-cloudy'
  //     case 'clear-day':
  //       return 'wi wi-day-sunny'
  //     case 'partly-cloudy-night':
  //       return 'wi wi-night-partly-cloudy'
  //     default:
  //       return `wi wi-day-sunny`
  //   }
  // }

}