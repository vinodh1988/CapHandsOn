import { HomeComponent } from './routes/home/home.component';
import { CourseComponent } from './routes/course/course.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';

import {RouterModule} from '@angular/router';
import {ScheduleComponent} from "./routes/course/schedule/schedule.component";	
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CurrentComponent } from './routes/course/current/current.component';
import { TopicsearchComponent } from './routes/course/topicsearch/topicsearch.component';
const routes=[
    {path:"",component:HomeComponent},
    {path:"Courses",component:CourseComponent},
    {path:"Reviews",component:ReviewsComponent},
    {path:"Offices",component:OfficesComponent},
    {path:"Offers",component: OffersComponent},
    {path:"VirtualClass",component:VirtualclassComponent},
    {path:"CDetails/:ccode",component:CurrentComponent},
    {path:"Schedules",component:ScheduleComponent,outlet:"sidebar"},
    {path:"CourseSearch",component:TopicsearchComponent,outlet:"search"}
];

export const Routemod:ModuleWithProviders=RouterModule.forRoot(routes);
