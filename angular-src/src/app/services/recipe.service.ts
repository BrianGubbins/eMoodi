import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {

  constructor(private http:Http) { }

  getRecipes(){
    // var url = 'https://api.edamam.com/search?q=chicken';
    // url += '&from=0&to=5'
    // url += '&app_id=10d42f85&app_key=eebfb150fdd04e3418cd3fb620e91387'
  
    // this.recipe = undefined;

    // this.getRecipes = function(query, user){
    //   var url = 'https://api.edamam.com/search?q=' + query;
    //   url += '&from=0&to=50'
    //   url += '&app_id=10d42f85&app_key=eebfb150fdd04e3418cd3fb620e91387'
    //   if(user){
    //     user.healthLabels.forEach(function(label){
    //       url += '&health=' + label.label
    //     })
    //   }

    return this.http.get('https://api.edamam.com/search?q=&from=0&to=100&health=sugar-conscious&health=alcohol-free&diet=balanced&app_id=0d7244ce&app_key=f5b45cfc217e0ed8ef0f0f09e7b21058')
    .map(res => res.json());
  }

}
