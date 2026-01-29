import { Component, computed, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private readonly ui = inject(UiStore);
  readonly contact = computed(() => this.ui.site().contact);
  readonly phoneHref = computed(() => `tel:${this.contact().phone.replace(/\s/g, '')}`);
  readonly emailHref = computed(() => `mailto:${this.contact().email}`);
}
