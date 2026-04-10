import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from './i18n.service';

/**
 * Usage: {{ 'key' | t }}
 * For inline HTML: <h2 [innerHTML]="'key' | t"></h2>
 *
 * Pure pipe: re-runs automatically because the signal read inside
 * `translate()` participates in Angular's reactive change detection.
 */
@Pipe({ name: 't', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private i18n = inject(I18nService);

  transform(key: string): string {
    // Touch the signal so Angular re-evaluates when it changes.
    this.i18n.lang();
    return this.i18n.translate(key);
  }
}
