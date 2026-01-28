import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MENU_CATEGORIES } from '../../data/menu.data';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf, SectionTitleComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  readonly categories = MENU_CATEGORIES;
}
