import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
// import {nodeSchedule} from 'node-schedule';
// var cron = require('node-schedule');

//     cron.scheduleJob('*/1 * * * *', function(){
//       console.log('The answer to life, the universe, and everything!');
//     });

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor( private authService:AuthService  ) { }

  ngOnInit() {

    // this.getForecast()
  }

  getForecast() {
    this.authService.setWeather();
  }



}
