import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DownloadService } from '../../services/download.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="bg-gradient-to-br from-orange-50 to-white py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl md:text-6xl font-bold text-black mb-4">
              Hi, I'm <span class="text-orange-500">Liyandah</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-700 mb-6">
              Full Stack Software Engineer & Data Engineer
            </h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Full stack developer and data engineer with 7+ years in IT. Currently building secure payment gateway systems at ANGWA PAY. Experienced in Java Spring, Python, SQL, Power BI, and enterprise application development across retail and fintech.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a routerLink="/contact" class="btn-primary text-center">
                Get In Touch
              </a>
              <button type="button" (click)="downloadCV()" class="btn-secondary text-center">
                Download CV (PDF)
              </button>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-orange-500">
              <img src="assets/icons/LIyandah.jpeg" alt="Liyandah Hela" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {
  constructor(private downloadService: DownloadService) {}

  downloadCV(): void {
    this.downloadService.downloadCV();
  }
}

