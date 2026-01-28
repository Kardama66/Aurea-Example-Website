import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SITE } from '../../data/site.data';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './features.component.html'
})
export class FeaturesComponent {
  readonly features = SITE.features;
}
