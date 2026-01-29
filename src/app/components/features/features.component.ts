import { Component, computed, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './features.component.html'
})
export class FeaturesComponent {
  private readonly ui = inject(UiStore);
  readonly features = computed(() => this.ui.site().features);
}
