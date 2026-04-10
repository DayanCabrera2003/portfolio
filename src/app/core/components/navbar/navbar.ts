import { Component, inject } from '@angular/core';
import { I18nService } from '../../i18n/i18n.service';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  protected i18n = inject(I18nService);
}
