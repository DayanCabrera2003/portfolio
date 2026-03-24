import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HERO_FADE_DISTANCE } from '../../core/constants/layout';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  heroOpacity = 1;

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const fadeDistance = HERO_FADE_DISTANCE;
    
    this.heroOpacity = Math.max(0, 1 - (scrollPosition / fadeDistance));


  }
}