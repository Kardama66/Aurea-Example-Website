import { Component, computed, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  private readonly ui = inject(UiStore);
  readonly about = computed(() => this.ui.site().about);
}
