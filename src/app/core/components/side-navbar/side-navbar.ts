import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SCROLL_OFFSET } from '../../constants/layout';

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

  scrollToSection(section: string, event: Event) {
    event.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      const yOffset = SCROLL_OFFSET;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
