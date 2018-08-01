import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(fprice: any, price: any): any {
    if(price>20000)
    return fprice+" (18%)";
 else if(price>=16000)
    return  fprice+" (12%)";
 else if(price>=12000)
    return  fprice+" (9%)";
 else 
    return  fprice+" (5%)";
  }

}
