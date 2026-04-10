import { Component, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { AnimationItem } from 'lottie-web';

import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ScrollRevealDirective, TranslatePipe],
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
})
export class ResumeComponent implements AfterViewInit, OnDestroy {
  private animation: AnimationItem | null = null;
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const container = document.getElementById('resume-lottie');
    if (!container) return;

    import('lottie-web').then((lottie) => {
      this.animation = lottie.default.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/Business resume.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      });

      this.animation.addEventListener('data_failed', () => {
        container.textContent = '📄';
        container.style.fontSize = '1.5rem';
      });

      this.animation.addEventListener('error', () => {
        container.textContent = '📄';
        container.style.fontSize = '1.5rem';
      });
    });
  }

  ngOnDestroy(): void {
    if (this.animation) {
      this.animation.destroy();
    }
  }
}
