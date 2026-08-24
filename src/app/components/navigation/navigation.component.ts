import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a routerLink="/" class="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
              Liyandah Hela
            </a>
          </div>
          
          <div class="hidden md:flex space-x-8">
            <a routerLink="/" routerLinkActive="text-orange-500" [routerLinkActiveOptions]="{exact: true}" 
               class="text-black hover:text-orange-500 transition-colors font-medium">
              Home
            </a>
            <a routerLink="/about" routerLinkActive="text-orange-500" 
               class="text-black hover:text-orange-500 transition-colors font-medium">
              About
            </a>
            <a routerLink="/skills" routerLinkActive="text-orange-500" 
               class="text-black hover:text-orange-500 transition-colors font-medium">
              Skills
            </a>
            <a routerLink="/projects" routerLinkActive="text-orange-500" 
               class="text-black hover:text-orange-500 transition-colors font-medium">
              Projects
            </a>
            <a routerLink="/reports" routerLinkActive="text-orange-500" 
               class="text-black hover:text-orange-500 transition-colors font-medium">
              Reports
            </a>
            <a routerLink="/contact" routerLinkActive="text-orange-500" 
               class="text-black hover:text-orange-500 transition-colors font-medium">
              Contact
            </a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button (click)="toggleMenu()" class="text-black hover:text-orange-500 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div *ngIf="isMenuOpen" class="md:hidden bg-white border-t">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a routerLink="/" (click)="closeMenu()" 
             class="block px-3 py-2 text-black hover:bg-orange-50 hover:text-orange-500 rounded-md">
            Home
          </a>
          <a routerLink="/about" (click)="closeMenu()" 
             class="block px-3 py-2 text-black hover:bg-orange-50 hover:text-orange-500 rounded-md">
            About
          </a>
          <a routerLink="/skills" (click)="closeMenu()" 
             class="block px-3 py-2 text-black hover:bg-orange-50 hover:text-orange-500 rounded-md">
            Skills
          </a>
          <a routerLink="/projects" (click)="closeMenu()" 
             class="block px-3 py-2 text-black hover:bg-orange-50 hover:text-orange-500 rounded-md">
            Projects
          </a>
          <a routerLink="/reports" (click)="closeMenu()" 
             class="block px-3 py-2 text-black hover:bg-orange-50 hover:text-orange-500 rounded-md">
            Reports
          </a>
          <a routerLink="/contact" (click)="closeMenu()" 
             class="block px-3 py-2 text-black hover:bg-orange-50 hover:text-orange-500 rounded-md">
            Contact
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}

