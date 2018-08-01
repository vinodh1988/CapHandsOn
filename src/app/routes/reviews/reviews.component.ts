import { Component, OnInit } from '@angular/core';
import { review } from '../../types/review';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews:review[];
  constructor(private rs:ReviewService) { }

  ngOnInit() {
        this.rs.getReviews().subscribe(
            (data:review[])=>this.reviews=data,
            (error)=>this.reviews=[]

          );

          
      
  }

}
