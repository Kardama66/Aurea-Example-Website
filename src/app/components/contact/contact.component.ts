import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SITE } from '../../data/site.data';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  readonly contact = SITE.contact;
  readonly phoneHref = `tel:${SITE.contact.phone.replace(/\s/g, '')}`;
  readonly emailHref = `mailto:${SITE.contact.email}`;
}
