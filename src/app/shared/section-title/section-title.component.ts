import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './section-title.component.html'
})
export class SectionTitleComponent {
  @Input() eyebrow?: string;
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() tone: 'dark' | 'light' = 'dark';
}
