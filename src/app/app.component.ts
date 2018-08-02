import { Component } from '@angular/core';
import { EnquiryService } from './services/enquiry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  time:number=5;
  offermessage:string;
  constructor(private es:EnquiryService){
     this.offermessage=es.getOfferMessage();
  }
}
