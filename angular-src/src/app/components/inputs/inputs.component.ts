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
  filled = true;

  lat: number;
  lng: number;
  forecast: any;


  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private weatherServ: WeatherService
    ) { }

  ngOnInit() {
    $('img').click(function () {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
     });
   } else {
     /// default coords
    this.lat = 40.73;
    this.lng = -73.93;
   }

   this.authService.getMood().subscribe(moodDocs => {
    console.log(moodDocs);

    var lastCreated = new Date(moodDocs[moodDocs.length-1].date);
    var today = new Date();
    if(lastCreated.getDay() == today.getDay()) {
      this.filled=true;
    }
    else{
      this.filled = false;
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
  var moodInfo
    if(!this.filled){
      moodInfo = {
      userId: this.UserID,
      date: Date.now,
      sleep: this.sleep,
      diet: this.diet,
      exercise: this.exercise,
      moodData: [{currMood: this.mood, date: Date.now()}]
    }
  }

  else{
     moodInfo = {
      userId: this.UserID,
      date: Date.now,
      sleep: 0,
      diet: "",
      exercise: "",
      moodData: [{currMood: this.mood, date: Date.now()}]
    }
  }

    this.authService.setMood(moodInfo).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Info added !', { cssClass: 'alert-success', timeout: 3000 });
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });


    console.log(moodInfo);
    this.router.navigate(['dashboard']);
  }

}
