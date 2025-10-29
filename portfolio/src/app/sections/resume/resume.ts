import { Component, OnInit, AfterViewInit } from '@angular/core';
import lottie from 'lottie-web';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.html',
  styleUrls: ['./resume.scss'],
})
export class ResumeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const container = document.getElementById('resume-lottie');
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/Business resume.json'
      });
    }
  }
}
