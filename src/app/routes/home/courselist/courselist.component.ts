import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service';
import {course} from '../../../types/course';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  courselist:course[];
  
  constructor(private cs:CourseService) { 

    
  }

  ngOnInit() {
     this.courselist=this.cs.getCourses();
  }

}
