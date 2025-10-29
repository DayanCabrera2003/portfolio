import { Component } from '@angular/core';
import { NavbarComponent } from './core/components/navbar/navbar';
import { SideNavbarComponent } from './core/components/side-navbar/side-navbar';
import { FooterComponent } from './core/components/footer/footer';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { ResumeComponent } from './sections/resume/resume';
import { ServicesComponent } from './sections/services/services';
import { ContactComponent } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SideNavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}