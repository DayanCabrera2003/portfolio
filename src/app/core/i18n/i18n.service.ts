import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Lang, translations } from './translations';

const STORAGE_KEY = 'portfolio.lang';
const DEFAULT_LANG: Lang = 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private platformId = inject(PLATFORM_ID);

  /** Reactive current language. */
  readonly lang = signal<Lang>(this.initialLang());

  constructor() {
    // Sync <html lang> on first load (browser only).
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = this.lang();
    }
  }

  /** Translate a dot-notation key for the current language. */
  translate(key: string): string {
    const dict = translations[this.lang()];
    return dict[key] ?? translations.en[key] ?? key;
  }

  /** Set a specific language and persist it. */
  setLang(next: Lang): void {
    if (next === this.lang()) return;
    this.lang.set(next);
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch { /* storage may be blocked */ }
      document.documentElement.lang = next;
    }
  }

  /** Toggle between EN and ES. */
  toggle(): void {
    this.setLang(this.lang() === 'en' ? 'es' : 'en');
  }

  private initialLang(): Lang {
    if (!isPlatformBrowser(this.platformId)) return DEFAULT_LANG;
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'en' || stored === 'es') return stored;
    } catch { /* ignore */ }
    return DEFAULT_LANG;
  }
}
