import { Component } from '@angular/core';
import { NavbarComponent } from './core/components/navbar/navbar';
import { FooterComponent } from './core/components/footer/footer';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { ResumeComponent } from './sections/resume/resume';
import { ServicesComponent } from './sections/services/services';
import { PortfolioComponent } from './sections/portfolio/portfolio';
import { ContactComponent } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}