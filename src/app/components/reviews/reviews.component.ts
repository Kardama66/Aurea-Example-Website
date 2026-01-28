import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { REVIEWS } from '../../data/reviews.data';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent {
  readonly reviews = REVIEWS;
  readonly stars = [1, 2, 3, 4, 5];
}
