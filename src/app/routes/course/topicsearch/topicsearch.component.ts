import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../../topic.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-topicsearch',
  templateUrl: './topicsearch.component.html',
  styleUrls: ['./topicsearch.component.css']
})
export class TopicsearchComponent implements OnInit {
topic:string;
topics;
subscription;
  constructor(private ts:TopicService) { }

  ngOnInit() {
    this.subscription= this.ts.getTopics("nopattern").subscribe(
       data=>this.topics=data,
       ()=>alert("service not working...!!!")
     )
     
     
  }

  changeText(){
    let pattern=this.topic;
      if(this.topic==undefined || this.topic.length==0)
        pattern="nopattern";
      this.subscription.unsubscribe();
      this.subscription= this.ts.getTopics(pattern).subscribe(
        data=>{this.topics=data;console.log(data);},
        ()=>alert("service not working...!!!")
      )
  }

}
