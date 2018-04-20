import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
declare var $: any;

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})

export class InputsComponent implements OnInit {
  UserID = (JSON.parse(localStorage.getItem('user'))).id;
  date = Date.now;
  mood: Number;
  diet: String;
  exercise: String;
  sleep: Number;
  sleepFilled = false;
  dietFilled = false;
  exerciseFilled = false;
  lastCreated;

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    $('img').click(function () {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
    });

    this.authService.getMood().subscribe(moodDocs => {
      moodDocs = moodDocs.reverse()
      if (moodDocs[0] == null) { // to handle a new user with no info
        this.sleepFilled = false;
        this.dietFilled = false;
        this.exerciseFilled = false;
      }

      // get the most recent document in collection for user
      this.lastCreated = moodDocs[moodDocs.length - 1];

      // if the newest doc wasn't created today then set fill values to false
      var today = new Date();
      if (new Date(this.lastCreated.date).getDay() != today.getDay()) {
        this.sleepFilled = false;
        this.dietFilled = false;
        this.exerciseFilled = false;
      }

      //else check the last created to see if values filled or not 
      else {
        if (this.lastCreated.sleep != null) {
          this.sleepFilled = true;
        }

        if (this.lastCreated.diet != null) {
          this.dietFilled = true;
        }

        if (this.lastCreated.exercise != null) {
          this.exerciseFilled = true;
        }
      }

    },
      err => {
        console.log(err);
        return false;
      });
  }

  reset() {
    this.mood = null;
    this.sleep = null;
    this.diet = null;
    this.exercise = null;

    $('.btn-group :radio').prop('checked', false);
    $('.btn-group .active').removeClass('active');
    $('.selected').removeClass('selected');

  }

  expand() {
    $('.container').toggleClass('expand');

  }

  setMood(mood) {
    this.mood = mood;
  }

  setDiet(diet) {
    this.diet = diet;
  }

  setExercise(exercise) {
    this.exercise = exercise;
  }

  onInfoSubmit() {

    if (this.mood || this.sleep || this.diet || this.exercise) {

      if (this.lastCreated != null && new Date(this.lastCreated.date).getDay() == new Date().getDay()) {
        if (this.sleep == null) {
          this.sleep = this.lastCreated.sleep
        }

        if (this.exercise == null) {
          this.exercise = this.lastCreated.exercise
        }

        if (this.diet == null) {
          this.diet = this.lastCreated.diet
        }
      }

      let moodInfo = {
        userId: this.UserID,
        date: Date.now,
        sleep: this.sleep,
        diet: this.diet,
        exercise: this.exercise,
        moodData: [{ currMood: this.mood, date: Date.now() }]
      }

      this.authService.setMood(moodInfo).subscribe(data => {
        if (data.success) {
          this.flashMessage.show('Info added !', { cssClass: 'alert-success text-center', timeout: 3000 });
        } else {
          this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger text-center', timeout: 3000 });
        }
      });

      this.router.navigate(['dashboard']);
    }
    else {
      this.flashMessage.show('Please fill in some data', { cssClass: 'alert-danger text-center', timeout: 3000 });

    }
  }

}



