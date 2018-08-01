import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
coursenow:string;
  constructor(private ar:ActivatedRoute) { }
 
  ngOnInit() {
       this.ar.params.subscribe((params)=>
       this.coursenow=params['ccode']);
  }

}
