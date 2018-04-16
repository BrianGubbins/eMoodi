import { Component, OnInit, Pipe } from '@angular/core';
import { RecipeService } from '../../services/recipe.service'
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/do';
import * as vars from './exercises';


@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  modalDetails = { title: "", description: "" };
  recipes = [];
  diet = true;
  exercise = false;
  sleep = false;
  allExercises = [];
  dailyWeather: any;
  limit = 3;
  dietTag: String;
  calorieIntake: Number;
  activities: String;

  constructor(private recipeService: RecipeService, private authService: AuthService) { }

  ngOnInit() {

    this.authService.getWeather().subscribe(weather => {
      this.dailyWeather = weather;
    },
      err => {
        console.log(err);
        return false;
      },
      () => {
        this.getExercises()
      });
  }

  //Functions

  getExercises() {
    this.authService.getProfile().subscribe(profile => {
      var user = profile.user;
      var bmi = user.bmi;
      if (bmi < 18.5) {
        this.getExerciseSuggestions(2);
        this.dietTag = "high-protein"
      }
      if (bmi > 18.5 && bmi < 25) {
        this.getExerciseSuggestions(3);
        this.dietTag = "balanced"
      }
      if (bmi > 25) {
        this.getExerciseSuggestions(1);
        this.dietTag = "low-fat"
      }

      if(user.gender == "M"){
        this.calorieIntake = 2500
      }
      if(user.gender == "F"){
        this.calorieIntake = 2000
      }

    },
      err => {
        console.log(err);
        return false;
      },
      () => {
        this.getRecipes()
      });
  }

  getRecipes() {
    this.recipeService.getRecipes(this.dietTag).subscribe(recipeResults => {
      var recipesArray = recipeResults.hits;
      var recipe;
      if (recipesArray.length > 0) {
        for (var i = 0, len = recipesArray.length; i < len; i++) {
          recipe = recipesArray[i].recipe;
          if(this.dailyWeather.cloudCover > .4){
            if (recipe.digest[21].hasRDI && recipe.calories <= this.calorieIntake) {
              this.recipes.push(recipe);
            }
          }
          else if(recipe.calories <= this.calorieIntake){       
              this.recipes.push(recipe);        
          }
        }
        this.shuffle(this.recipes);
        console.log(this.recipes)
      }

    },
      err => {
        console.log(err);
        return false;
      });
  }

  suggestion(type) {
    switch (type) {
      case "diet":
        this.diet = true;
        this.exercise = false;
        this.sleep = false;
        break;

      case "exercise":
        this.diet = false;
        this.exercise = true;
        this.sleep = false;
        break;

      case "sleep":
        this.diet = false;
        this.exercise = false;
        this.sleep = true;
        break;
    }
  }

  modalSettings(exTitle, exDescription) {
    this.modalDetails.title = exTitle;
    this.modalDetails.description = exDescription;
  }

  getExerciseSuggestions(level) {

    Object.keys(vars.exercises).forEach(key => {

      var exercises = vars.exercises[key].filter(ex => ex.level <= level);
      var finalExercises = [];
      for (var i = 0; i < 5; i++) {
        var index = Math.floor(Math.random() * exercises.length);
        var units
        if (exercises[index].duration == null) {
          var reps = level * 10;
          units = { units: "x" + reps }
        }

        else {
          units = { units: exercises[index].duration };
        }
        var exercise = Object.assign({}, exercises[index], units);
        exercises.splice(index, 1);  // This removes the picked element from the array
        finalExercises.push(exercise);
      }

      var newExercises = {
        name: key,
        exercises: finalExercises
      }

      this.allExercises.push(newExercises);

    });

  }


  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


}