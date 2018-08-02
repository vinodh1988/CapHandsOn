import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule,HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { ScheduleComponent } from './routes/course/schedule/schedule.component';
import { ServiceComponent } from './service/service.component';
import { TopicsearchComponent } from './routes/course/topicsearch/topicsearch.component'

import {TopicService} from './topic.service';
import { HighlightDirective } from './directives/highlight.directive';
import { BannerDirective } from './directives/banner.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    ScheduleComponent,
    ServiceComponent,
    TopicsearchComponent,
    HighlightDirective,
    BannerDirective
  ],
  imports: [
    BrowserModule,Routemod,FormsModule,ReactiveFormsModule,
    HttpClientModule,TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [CourseService,ReviewService,EnquiryService,TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
