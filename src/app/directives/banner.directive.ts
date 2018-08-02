import { Directive,Input ,ViewContainerRef,TemplateRef} from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Directive({
  selector: '[offer]'
})
export class BannerDirective {

  constructor(private es:EnquiryService,private vc:ViewContainerRef,
    private tref:TemplateRef<any>) { }

  @Input() set offer(data){
    if(this.es.isOfferDay())
    {
        this.vc.createEmbeddedView(this.tref)
        setTimeout(()=>this.vc.clear(),data*1000);
    }

    else{
            this.vc.clear();
    }
   
}
  
}
