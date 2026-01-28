import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() href?: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() className = '';
  @Input() ariaLabel?: string;

  get buttonClasses(): string {
    return `btn btn-${this.variant} ${this.className}`.trim();
  }
}
