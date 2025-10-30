import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-navbar.html',
  styleUrls: ['./side-navbar.scss']
})
export class SideNavbarComponent {
  expanded = false;
  navItems = [
    { icon: '👤', label: 'About', section: 'about' },
    { icon: '', label: 'Resume', section: 'resume' },
    { icon: '🛠️', label: 'Services', section: 'services' }
  ];

  scrollToSection(section: string) {
    const el = document.getElementById(section);
    if (el) {
      const yOffset = -60; // Offset para el navbar (ajusta según tu navbar height)
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
