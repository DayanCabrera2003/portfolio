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
    if (container) {
      this.animation = lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/Business resume.json',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
      });

      // Asegurar que la animación se reproduce en loop
      this.animation.addEventListener('loopComplete', () => {
        if (this.animation) {
          this.animation.goToAndPlay(0, true);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.animation) {
      this.animation.destroy();
    }
  }
}
