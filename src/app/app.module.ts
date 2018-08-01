import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './routes/home/home.component';
import { CourseComponent } from './routes/course/course.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { Routemod } from './app.route';
import { SlideareaComponent } from './slidearea/slidearea.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CoursedetailComponent } from './routes/home/coursedetail/coursedetail.component';
import { CourseService } from './services/course.service';
import { NewpricePipe } from './pipes/newprice.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
import { FiltercoursePipe } from './pipes/filtercourse.pipe';
import { ReviewComponent } from './routes/reviews/review/review.component';

import {ReviewService} from './services/review.service';
import {EnquiryService} from './services/enquiry.service';
import { CurrentComponent } from './routes/course/current/current.component';
import { ScheduleComponent } from './routes/course/schedule/schedule.component'

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    CourseComponent,
    ReviewsComponent,
    OfficesComponent,
    OffersComponent,
    VirtualclassComponent,
    SlideareaComponent,
    EnquiryComponent,
    MainareaComponent,
    CourselistComponent,
    CoursedetailComponent,
    NewpricePipe,
    DiscountPipe,
    FiltercoursePipe,
    ReviewComponent,
    CurrentComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,Routemod,FormsModule,HttpClientModule
  ],
  providers: [CourseService,ReviewService,EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
