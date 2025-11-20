import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-black text-white mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Contact Info -->
          <div>
            <h3 class="text-xl font-bold text-orange-500 mb-4">Contact Information</h3>
            <div class="space-y-2">
              <p class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:liyandahhella12&#64;gmail.com" class="hover:text-orange-500 transition-colors">
                  liyandahhella12&#64;gmail.com
                </a>
              </p>
              <p class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/in/liyandah-hela-b48481166" target="_blank" rel="noopener noreferrer" class="hover:text-orange-500 transition-colors">
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-bold text-orange-500 mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a routerLink="/" class="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a routerLink="/about" class="hover:text-orange-500 transition-colors">About</a></li>
              <li><a routerLink="/skills" class="hover:text-orange-500 transition-colors">Skills</a></li>
              <li><a routerLink="/projects" class="hover:text-orange-500 transition-colors">Projects</a></li>
              <li><a routerLink="/reports" class="hover:text-orange-500 transition-colors">Reports</a></li>
              <li><a routerLink="/contact" class="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {{ currentYear }} Liynadah Tebhogo Hela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

