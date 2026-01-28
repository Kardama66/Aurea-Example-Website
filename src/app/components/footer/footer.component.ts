import { Component } from '@angular/core';
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { SITE } from '../../data/site.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly siteName = SITE.name;
  readonly socials = SITE.socials;
}
