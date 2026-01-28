import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SITE } from '../../data/site.data';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  readonly about = SITE.about;
}
