import { Component, OnInit ,Input } from '@angular/core';
import {course} from '../../../types/course'
@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  @Input('course') current:course;
  
  constructor() { }

  ngOnInit() {
  }

}
