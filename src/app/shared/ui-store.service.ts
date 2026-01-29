import { Injectable, computed, effect, signal } from '@angular/core';
import { Language } from '../data/i18n.data';
import { MENU_CATEGORIES } from '../data/menu.data';
import { REVIEWS } from '../data/reviews.data';
import { SITE, SITE_NAV } from '../data/site.data';

type Theme = 'light' | 'dark';

const STORAGE_THEME = 'aurea-theme';
const STORAGE_LANGUAGE = 'aurea-lang';

@Injectable({ providedIn: 'root' })
export class UiStore {
  readonly language = signal<Language>('en');
  readonly theme = signal<Theme>('dark');

  readonly site = computed(() => SITE[this.language()]);
  readonly navItems = computed(() => SITE_NAV[this.language()]);
  readonly menuCategories = computed(() => MENU_CATEGORIES[this.language()]);
  readonly reviews = computed(() => REVIEWS[this.language()]);
  readonly header = computed(() => this.site().header);

  readonly languageLabel = computed(() => {
    const header = this.header();
    return this.language() === 'en'
      ? header.languageEnglishShort
      : header.languagePolishShort;
  });

  readonly languageAriaLabel = computed(() => {
    const header = this.header();
    return this.language() === 'en'
      ? header.languageToPolish
      : header.languageToEnglish;
  });

  readonly themeLabel = computed(() => {
    const header = this.header();
    return this.theme() === 'dark' ? header.themeDark : header.themeLight;
  });

  readonly themeAriaLabel = computed(() => {
    const header = this.header();
    return this.theme() === 'dark' ? header.themeToLight : header.themeToDark;
  });

  constructor() {
    if (typeof window !== 'undefined') {
      const storedThemeValue = window.localStorage.getItem(STORAGE_THEME);
      const storedLanguageValue = window.localStorage.getItem(STORAGE_LANGUAGE);
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
      const browserLang = window.navigator?.language?.toLowerCase().startsWith('pl')
        ? 'pl'
        : 'en';

      const storedTheme =
        storedThemeValue === 'light' || storedThemeValue === 'dark'
          ? storedThemeValue
          : null;
      const storedLanguage =
        storedLanguageValue === 'en' || storedLanguageValue === 'pl'
          ? storedLanguageValue
          : null;

      this.theme.set(storedTheme ?? (prefersDark ? 'dark' : 'light'));
      this.language.set(storedLanguage ?? browserLang);
    }

    effect(() => {
      const theme = this.theme();
      if (typeof document === 'undefined') {
        return;
      }
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.style.colorScheme = theme;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_THEME, theme);
      }
    });

    effect(() => {
      const lang = this.language();
      if (typeof document === 'undefined') {
        return;
      }
      document.documentElement.setAttribute('lang', lang);
      document.title = this.site().metaTitle;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_LANGUAGE, lang);
      }
    });
  }

  toggleTheme(): void {
    this.theme.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }

  toggleLanguage(): void {
    this.language.update((value) => (value === 'en' ? 'pl' : 'en'));
  }
}
