import { Component, OnInit, Pipe } from '@angular/core';
import { RecipeService } from '../../services/recipe.service'
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../services/auth.service';
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

  constructor(private recipeService: RecipeService, private authService:AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
     var user = profile.user;
     var bmi = 18;
     if(bmi < 18.5){
      this.getExerciseSuggestions(2);
      }
      if(bmi > 18.5 && bmi < 25){
        this.getExerciseSuggestions(3);    
      }
      if(bmi > 25){
        this.getExerciseSuggestions(1);
      }

      },
    err => {
      console.log(err);
      return false;
    });

    this.recipeService.getRecipes().subscribe(recipeResults => {

      if (recipeResults.hits.length > 0) {
        for (var i = 0, len = recipeResults.hits.length; i < len; i++) {
          this.recipes.push(recipeResults.hits[i].recipe);
        }
      }

    },
      err => {
        console.log(err);
        return false;
      });
  }

  suggestion(type) {
    console.log(type);
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

  getExerciseSuggestions(level){

    Object.keys(vars.exercises).forEach(key => {

      var exercises = vars.exercises[key].filter(ex => ex.level <= level);
      var finalExercises=[];
      for(var i=0; i<5; i++ ){
        var index = Math.floor(Math.random()*exercises.length);
        var units
        if(exercises[index].duration == null){
          var reps = level*10;
          units = {units: "x" + reps}
        }

        else{
          units = {units: exercises[index].duration};
        } 
        // var units = {units: "x15"}
        var exercise = Object.assign({},exercises[index],units) ;
        exercises.splice(index, 1);  // This removes the picked element from the array
                // console.log("index: " + exercises[index].name )
        finalExercises.push(exercise);
      }
      console.log(finalExercises)

      var newExercises = {
        name: key,
        exercises: finalExercises
      }

      this.allExercises.push(newExercises);

  });

  }


}