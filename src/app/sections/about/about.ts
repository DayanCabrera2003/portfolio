import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, TranslatePipe],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent {}
