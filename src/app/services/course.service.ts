import { Injectable } from '@angular/core';
import {course} from '../types/course'
@Injectable()
export class CourseService {

  private courselist:course[];

  constructor() { 
     this.courselist=[{
       name:"Angular 4",
       description:"Googles UI Framework, Component based model",
       price:21000,
       image:"angular2.png"
     },
     {
      name:"Asp.net",
      description:"Microsoft server side web technology",
      price:12000,
      image:"asp.png"
    },
    {
      name:"HTML5",
      description:"Latest Specification for HTML",
      price:11000,
      image:"html5.png"
    },
    {
      name:"Java",
      description:"A platform neutral enterprise language",
      price:10000,
      image:"angular2.png"
    },
    {
      name:"CSS3",
      description:"Latest version for CSS",
      price: 11000,
      image:"CSS3.png"
    },
    {
      name:"React JS",
      description:"Facebooks UI Framework, Component based model",
      price:20000,
      image:"react.png"
    },
    {
      name:"Redhat Linux",
      description:"Enterprise grade linux Operating system",
      price:16000,
      image:"redhat.png"
    }
    ];

  }
  
  public getCourses():course[]{
      return this.courselist;
  }
}
