import { Component, computed, inject } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private readonly ui = inject(UiStore);
  readonly siteName = computed(() => this.ui.site().name);
  readonly socials = computed(() => this.ui.site().socials);
  readonly footerCopy = computed(() => this.ui.site().footer);
}
