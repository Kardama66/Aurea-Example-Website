import { Component, computed, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf, SectionTitleComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  private readonly ui = inject(UiStore);
  readonly categories = this.ui.menuCategories;
  readonly menuCopy = computed(() => this.ui.site().menu);
}
