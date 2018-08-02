import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
name:string;
email:string;
message:string;
hasErrors:boolean=false;
errors:string[];
sending:boolean=false;
imagename:string;

  constructor(private es:EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry(){
    let pattern=/^[a-zA-Z][A-Za-z0-9_\.]+@[a-z]{2,}\.[a-z]{2,5}$/;
     this.errors=[];
     this.hasErrors=false;

    if(this.name==undefined || this.name.length==0){
       this.errors.push("Name should be entered");
       this.hasErrors=true;
    }
    if(this.email==undefined || this.email.length==0){
       this.errors.push("email should be entered");
       this.hasErrors=true;
    }
   else if(!pattern.test(this.email)){
       this.errors.push("Not in email format");
       this.hasErrors=true;
    }
    if(this.message==undefined || this.message.length<10){
      this.errors.push("Message should be atleast 10 char long");
      this.hasErrors=true;
    }
    
    if(this.errors.length==0){
        this.sending=true;
        this.imagename="pleasewait.gif";

        let obj={name:this.name,email:this.email,message:this.message};

        this.es.postEnquiry(obj).subscribe(
          ()=>{
            this.imagename="sent.png";
            setTimeout(()=>{
                this.sending=false;
                this.name="";
                this.message="";
                this.email="";
            },2000);

          },
          ()=>{
               alert("Enquiry cannot be sent");
               this.sending=false;
               this.name="";
               this.message="";
               this.email="";
          }
        )

    }

  }
}
