import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    const fadeDistance = 300;
    
    this.heroOpacity = Math.max(0, 1 - (scrollPosition / fadeDistance));
    
    // Debug: descomentar para ver si funciona
    console.log('Scroll:', scrollPosition, 'Opacity:', this.heroOpacity);
  }
}