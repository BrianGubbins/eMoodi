import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit, OnInit {
  moods = [];
  moodDates = [];
  dates = [];
  sleep = [];
  exercise = [];
  diet = [];
  moodGraph: any;
  sleepGraph: any;
  exerciseDietGraph: any;
  chart1 = true;
  chart2 = false;
  chart3 = false;
  data = [];

  constructor(
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getMood().subscribe(moodDocs => {
      this.data= moodDocs
      this.updateGraphs();

    },
      err => {
        console.log(err);
        return false;
      });
  }


  ngAfterViewInit() {
this.updateGraphs;
    var moodCanvas = <HTMLCanvasElement>document.getElementById('moodGraph');
    var ctx: CanvasRenderingContext2D = moodCanvas.getContext("2d");
    this.moodGraph = new Chart(ctx, {
      "type": "line",
      "data": {
        "labels": this.moodDates,
        "datasets": [{
          "label": "Your Mood",
          "data": this.moods,
          "fill": true,
          "backgroundColor": "rgba(	0, 123, 255,0.2)",
          "borderColor": "rgba(	0, 123, 255, 0.6)",
        }]
      },
      options: {
        responsive: true,
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            ticks: {
              maxTicksLimit: 3,
              maxRotation: 0 
            }
          }],
          yAxes: [{
            ticks: {
              fontSize: 15,
              min: 0,
              max: 6,
              callback: function (label, index, labels) {
                switch (label) {
                  case 1:
                    return 'Very Sad';
                  case 2:
                    return 'Sad';
                  case 3:
                    return 'Indifferent';
                  case 4:
                    return 'Happy';
                  case 5:
                    return 'Very Happy';
                }
              }
            }
          }]
        }
      }
    });

    var sleepCanvas = <HTMLCanvasElement>document.getElementById('sleepGraph');
    var ctx1: CanvasRenderingContext2D = sleepCanvas.getContext("2d");
    this.sleepGraph = new Chart(ctx1, {
      "type": "line",
      "data": {
        "labels": this.dates,
        "datasets": [{
          "label": "Sleep",
          "data": this.sleep,
          "fill": true,
          "borderColor": "rgb(255, 209, 26)"
          
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 12
            }
          }]
        }
      }
    });

    var excerciseDietCanvas = <HTMLCanvasElement>document.getElementById('exerciseDiet');
    var ctx1: CanvasRenderingContext2D = excerciseDietCanvas.getContext("2d");
    this.exerciseDietGraph = new Chart(ctx1, {
      "type": "horizontalBar",
      "data": {
        "labels": this.dates,
        "datasets": [{
          "label": "Exercise",
          "data": this.exercise,
          "fill": false,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)"
        },
        {
          "label": "Diet",
          "data": this.diet,
          "fill": false,
          backgroundColor: "rgba(	0, 123, 255,0.2)",
          borderColor: "rgba(	0, 123, 255,1)"
        }]
      },
      options: {
        tooltips: {
          enabled: false
        },
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              fontSize: 15,
            }
          }],
          xAxes: [{
            ticks: {
              fontSize: 20,
              min: 0,
              max: 3,
              callback: function (label, index, labels) {
                switch (label) {
                  case 1:
                    return 'Poor';
                  case 2:
                    return 'Fair';
                  case 3:
                    return 'Good';
                }
              }
            }
          }]
        },
        elements: {
          rectangle: {
            borderWidth: 2,
          }
        }
      },

    });

  }

  chart(type) {
    switch (type) {
      case "mood":
        // this.moodData.push(5);
        // this.dates.push(Date.now() + ((1000 * 60 * 60 * 24) * 4));
        // this.myChart.update();
        this.chart1 = true;
        this.chart2 = false;
        this.chart3 = false;
        break;

      case "sleep":
        this.chart1 = false;
        this.chart2 = true;
        this.chart3 = false;
        break;

      case "exerciseDiet":
        this.chart1 = false;
        this.chart2 = false;
        this.chart3 = true;
        break;
    }
  }

  score(dietScore, exerciseScore) {
    if (dietScore == "poor") {
      this.diet.push(1);
    }
    if (exerciseScore == "poor") {
      this.exercise.push(1);
    }

    if (dietScore == "fair") {
      this.diet.push(2);
    }
    if (exerciseScore == "fair") {
      this.exercise.push(2);
    }

    if (dietScore == "good") {
      this.diet.push(3);
    }
    if (exerciseScore == "good") {
      this.exercise.push(3);
    }
  }

  dateFormat(date) {
    return new Date(date).toDateString().slice(0, -5);
  }

  updateGraphs(){
    if (this.data.length > 0) {
      for (var i = 0, len = this.data.length; i < len; i++) {
        this.sleep.push(this.data[i].sleep);
        this.dates.push(this.dateFormat(this.data[i].date));
        this.score(this.data[i].diet, this.data[i].exercise);

        this.sleepGraph.update();
        this.exerciseDietGraph.update();

        console.log(this.sleep, this.diet, this.exercise);

        for (var j = 0, c = this.data[i].moodData.length; j < c; j++) {
          this.moods.push(this.data[i].moodData[j].currMood);
          this.moodDates.push(this.dateFormat(this.data[i].moodData[j].date));
          this.moodGraph.update();

        }
      }
    }
  }

}
