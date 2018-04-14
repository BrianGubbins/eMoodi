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

  //   var notificationMessage = cron.scheduleJob('*/10 * * * * *', function () {
    
  //   var sendNotification = function(data) {
  //     var headers = {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "Authorization": "Basic YzBlMTRkMGEtODdlOC00MDM5LTk5ZWQtNjA2N2I4OWRkZGIw"
  //     };
      
  //     var options = {
  //       host: "onesignal.com",
  //       port: 443,
  //       path: "/api/v1/notifications",
  //       method: "POST",
  //       headers: headers
  //     };
      
  //     var https = require('https');
  //     var req = https.request(options, function(res) {  
  //       res.on('data', function(data) {
  //         console.log("Response:");
  //         console.log(JSON.parse(data));
  //       });
  //     });
      
  //     req.on('error', function(e) {
  //       console.log("ERROR:");
  //       console.log(e);
  //     });
      
  //     req.write(JSON.stringify(data));
  //     req.end();
  //   };
    
  //   var message = { 
  //     app_id: "e3c78f55-02be-4e3e-9502-64abbd2d806a",
  //     contents: {"en": "English Message"},
  //     included_segments: ["All"]
  //   };
    
  //   sendNotification(message);

  // });
};

}

