import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { UiStore } from '../../shared/ui-store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private readonly ui = inject(UiStore);
  readonly navItems = this.ui.navItems;
  readonly siteName = computed(() => this.ui.site().name);
  readonly headerCopy = computed(() => this.ui.site().header);
  readonly languageLabel = this.ui.languageLabel;
  readonly languageAriaLabel = this.ui.languageAriaLabel;
  readonly themeLabel = this.ui.themeLabel;
  readonly themeAriaLabel = this.ui.themeAriaLabel;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  toggleLanguage(): void {
    this.ui.toggleLanguage();
  }

  toggleTheme(): void {
    this.ui.toggleTheme();
  }

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
