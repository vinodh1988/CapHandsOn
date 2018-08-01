import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newprice'
})
export class NewpricePipe implements PipeTransform {

  transform(price: any, args?: any): any {
     if(price>20000)
        return price-(price*0.18);
     else if(price>=16000)
        return price-(price*0.12);
     else if(price>=12000)
        return price-(price*0.09);
     else 
        return price-price*0.05;
  }

}
