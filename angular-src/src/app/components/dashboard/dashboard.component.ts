import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import 'chartjs-plugin-annotation'

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
    this.authService.getMood()
      .subscribe(
        moodDocs => {
          this.data = moodDocs.reverse();
        },
        err => {
          console.log(err);
          return false;
        }, 
        () => { // on completion
          this.updateCharts();
        }
      )
  }


  ngAfterViewInit() {
    /*
  
  
  Mood Graph
  
  
  */
 
    // getting moodCanvas from the view, the canvas element in which the chart will be rendered
    var moodCanvas = <HTMLCanvasElement>document.getElementById('moodGraph');
    var ctx: CanvasRenderingContext2D = moodCanvas.getContext("2d");
    this.moodGraph = new Chart(ctx, {
      type: "line", // line chart
      data: {
        labels: this.moodDates, // each mood will have a label which is its date of creation
        datasets: [{
          label: "Your Mood",
          data: this.moods, // data used to plot is an array of all the moods(1-5)
          fill: true, // colours area under the line using rgba values below
          backgroundColor: "rgba(	0, 123, 255, 0.3)",
          borderColor: "rgba(255, 231, 77,1)"
        }]
      },
      options: { // options object contains all the chart customization 
        legend: {
          position: "top",
          display: true,
          labels: {
            fontSize: 15
          }
        },
        responsive: true, // canvas element will resize depending on screen size
        tooltips: { // the boxes that appear when hovering over a data point(mood) on the line 
          callbacks: { // customising tooltip to display the date and time the mood was created 
            label: function(tooltipItem, data) { // converting the date label per mood into time 
              return new Date(data.labels[tooltipItem.index].toString()).toLocaleTimeString();
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: { // a tick is a label i.e. date displayed on axis per mood
              maxTicksLimit: 7, // limiting ticks to 7 so axis isn't cluttered with labels
              maxRotation: 10, // the max a label can rotate due to less space on resize is 10 degrees
              callback: function (label, index, labels) { // cleaning up date object to use as a label 
                return new Date(label).toDateString().slice(0, -5);
              }
            }
          }],
          yAxes: [{
            ticks: {
              fontSize: 15,
              min: 0,
              max: 6, // given a max of 6, even though max of mood is 5, to make chart look better
              callback: function (label, index, labels) { 
                switch (label) { // changing mood values to corresponding strings so y axis isn't just numbers
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

    /*
    
    
    Exercise vs. Diet Graph
    
    
      */

    var excerciseDietCanvas = <HTMLCanvasElement>document.getElementById('exerciseDiet');
    var ctx1: CanvasRenderingContext2D = excerciseDietCanvas.getContext("2d");
    this.exerciseDietGraph = new Chart(ctx1, {
      type: "horizontalBar",
      data: {
        labels: this.dates,
        datasets: [{
          label: "Exercise",
          data: this.exercise,
          fill: false,
          backgroundColor: "rgb(255, 255, 77,0.5)",
          borderColor: "rgba(255, 231, 77,1)"
        },
        {
          label: "Diet",
          data: this.diet,
          fill: false,
          backgroundColor: "rgba(	0, 123, 255,0.2)",
          borderColor: "rgba(	0, 123, 255,1)"
        }]
      },
      options: {
        legend: {
          position: "top",
          display: true,
          labels: {
            fontSize: 15
          }
        },
        tooltips: {
          enabled: false
        },
        responsive: true,
        scales: {
          yAxes: [{
            gridLines: {
              drawOnChartArea: false
            },
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


    /*
    
    
    Sleep Graph
    
    
    */


    var config = {
      type: "bar",
      data: {
        labels: this.dates,
        datasets: [{
          label: "Sleep",
          data: this.sleep,
          fill: false,
          backgroundColor: "rgba(	0, 123, 255,0.2)",
          borderColor: "rgba(	0, 123, 255,1)"

        }

        ]
      },
      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          // position:"top",
          display: true,
          labels: {
            fontSize: 15
          }
        },

        annotation: {
          annotations: [
            {
              drawTime: "afterDatasetsDraw",
              type: "line",
              mode: "horizontal",
              scaleID: "y-axis-0",
              value: 9,
              label: {
                backgroundColor: "black",
                content: "Recommended Sleep",
                enabled: true,
              }
            },
            {
              drawTime: "beforeDatasetsDraw",
              type: "box",
              yScaleID: "y-axis-0",
              yMin: 7,
              yMax: 9,

              backgroundColor: "rgb(255, 255, 77,0.5)",
              borderColor: "rgba(255, 255, 77,1)"
            }
          ]
        },
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 15
            }
          }
          ],
          yAxes: [{
            scaleLabel: {
              fontSize: 15,
              display: true,
              labelString: 'Hours'
            },
            ticks: {
              fontSize: 15,
              min: 0,
              max: 12
            }
          }]
        },
        elements: {
          rectangle: {
            borderWidth: 2,
          }
        }
      }
    }
    var sleepCanvas = <HTMLCanvasElement>document.getElementById('sleepGraph');
    var ctx1: CanvasRenderingContext2D = sleepCanvas.getContext("2d");
    this.sleepGraph = new Chart(ctx1, config);


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

  updateCharts() {
    if (this.data.length > 0) {
      // looping through all documents returned
      for (var i = 0, len = this.data.length; i < len; i++) {

        // sleep value
        this.sleep.push(this.data[i].sleep);

        // date corresponding to the document's creation date
        this.dates.push(this.dateFormat(this.data[i].date));

        /* score function converts the string values of exercise and diet 
        i.e. "Poor", "Fair" and "Good" to numbers values 1, 2 and 3 respectively
        for graphing purposes */
        this.score(this.data[i].diet, this.data[i].exercise);

        this.sleepGraph.update();
        this.exerciseDietGraph.update();

        // looping through mood objects in the moodData array
        for (var j = 0, c = this.data[i].moodData.length; j < c; j++) {

          // mood value 1-5
          this.moods.push(this.data[i].moodData[j].currMood);

          // date corresponding to the object's creation date
          this.moodDates.push(this.data[i].moodData[j].date);
          this.moodGraph.update();

        }
      }
    }
    else{
      this.flashMessage.show('New user ? Click the update Mood tab to get started', {
        cssClass: 'alert-info text-center',
        timeout: 6000});
    }
  }

}
