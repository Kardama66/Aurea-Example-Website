import { Component, HostListener, signal } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { SITE_NAV, SITE } from '../../data/site.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly navItems = SITE_NAV;
  readonly siteName = SITE.name;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }
    this.scrolled.set(window.scrollY > 12);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
