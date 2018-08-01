import { HomeComponent } from './routes/home/home.component';
import { CourseComponent } from './routes/course/course.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';

import {RouterModule} from '@angular/router';
	
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
const routes=[
    {path:"",component:HomeComponent},
    {path:"Courses",component:CourseComponent},
    {path:"Reviews",component:ReviewsComponent},
    {path:"Offices",component:OfficesComponent},
    {path:"Offers",component: OffersComponent},
    {path:"VirtualClass",component:VirtualclassComponent}
];

export const Routemod:ModuleWithProviders=RouterModule.forRoot(routes);
