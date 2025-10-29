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
    { icon: '📞', label: 'Contact', section: 'contact' },
    { icon: '📄', label: 'Resume', section: 'resume' },
    { icon: '💼', label: 'Portfolio', section: 'portfolio' },
    { icon: '🛠️', label: 'Services', section: 'services' }
  ];

  scrollToSection(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
