import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  
  schedules:string[]=[
                      "Angular 5 course starts on August 14",
                      "AWS course starts August 12",
                      "Hadoop start September 1",
                      "Spring boot starts September 3"
                     ]

  constructor() { }

  ngOnInit() {
  }

}
