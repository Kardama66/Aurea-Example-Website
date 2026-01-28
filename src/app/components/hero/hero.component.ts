import { Component } from '@angular/core';
import { SITE } from '../../data/site.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  readonly hero = SITE.hero;
}
