import { Component } from '@angular/core';
var cron = require('node-schedule');
import { FlashMessagesService } from 'angular2-flash-messages';
import * as affirmation from './affirmations';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private flashMessage: FlashMessagesService,  private authService:AuthService) {

    // displays affirmation every 10 minutes
    var affirmationMessage = cron.scheduleJob('*/10 * * * *', function () {
      var message = affirmation.affirmations[Math.floor(Math.random() * affirmation.affirmations.length)];
      flashMessage.show(message, { cssClass: 'text-center alert-info', timeout: 15000 });
    });

    // creates weather object for the day at midnight every day
    var weather = cron.scheduleJob('00 00 * * *', function () {
      this.authService.setWeather();
    });

  }

}

