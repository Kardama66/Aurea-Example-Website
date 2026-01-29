import { Component, computed, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent {
  private readonly ui = inject(UiStore);
  readonly reviews = this.ui.reviews;
  readonly reviewsCopy = computed(() => this.ui.site().reviews);
  readonly stars = [1, 2, 3, 4, 5];
}
