import { Component, OnInit ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit,OnDestroy {

  constructor() { 
    console.log("Offices component created");
  }

  ngOnInit() {
  }

  ngOnDestroy(){
     console.log("offices component destroyed");
  }
}
