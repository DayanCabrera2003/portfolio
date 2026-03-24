import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
})
export class ResumeComponent implements AfterViewInit, OnDestroy {
  private animation: AnimationItem | null = null;

  ngAfterViewInit(): void {
    const container = document.getElementById('resume-lottie');
    if (!container) return;

    this.animation = lottie.loadAnimation({
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
  }

  ngOnDestroy(): void {
    if (this.animation) {
      this.animation.destroy();
    }
  }
}
