import { Pipe, PipeTransform } from '@angular/core';
import {course} from '../types/course';
@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], pricerange:string): any {
    let temp:course[]=[];
    if(pricerange=="High Price"){
       for(let x in courses)
           if(courses[x].price>=15000)
             temp.push(courses[x]);
          return temp;
    }
    else if(pricerange=="Moderate Price"){
      for(let x in courses)
      if(courses[x].price>10000&&courses[x].price<15000)
        temp.push(courses[x]);
     return temp;
    }
    else if(pricerange=="Low Price"){
      for(let x in courses)
      if(courses[x].price<=10000)
        temp.push(courses[x]);
     return temp;
    }
    else{
      return courses;
    }
  }

}
