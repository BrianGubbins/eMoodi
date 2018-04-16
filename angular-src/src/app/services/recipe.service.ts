import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {

  constructor(private http:Http) { }

  getRecipes(dietTag: String){
    return this.http.get('https://api.edamam.com/search?q=&from=0&to=100&health=sugar-conscious&health=alcohol-free&diet='+ dietTag +'&app_id=0d7244ce&app_key=f5b45cfc217e0ed8ef0f0f09e7b21058')
    .map(res => res.json());
  }

}
