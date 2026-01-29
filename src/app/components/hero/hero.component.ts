import { Component, computed, inject } from '@angular/core';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  private readonly ui = inject(UiStore);
  readonly hero = computed(() => this.ui.site().hero);
}
