import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  image: string;
  website?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div class="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
        <div class="text-center p-4">
          <svg *ngIf="project.title.toLowerCase().includes('stock') || project.title.toLowerCase().includes('app')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <svg *ngIf="project.title.toLowerCase().includes('power bi') || project.title.toLowerCase().includes('dashboard')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <svg *ngIf="project.title.toLowerCase().includes('report')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <svg *ngIf="project.title.toLowerCase().includes('database') || project.title.toLowerCase().includes('mssql')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
          <svg *ngIf="project.title.toLowerCase().includes('inventory')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <svg *ngIf="project.title.toLowerCase().includes('cyber') || project.title.toLowerCase().includes('cotheth')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <svg *ngIf="!project.title.toLowerCase().includes('stock') && !project.title.toLowerCase().includes('app') && !project.title.toLowerCase().includes('power bi') && !project.title.toLowerCase().includes('dashboard') && !project.title.toLowerCase().includes('report') && !project.title.toLowerCase().includes('database') && !project.title.toLowerCase().includes('mssql') && !project.title.toLowerCase().includes('inventory') && !project.title.toLowerCase().includes('cyber') && !project.title.toLowerCase().includes('cotheth')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p class="text-sm text-gray-600">{{ project.title }}</p>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-black mb-3">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
        
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let tech of project.technologies" 
                  class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span *ngFor="let tag of project.tags" 
                class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
            {{ tag }}
          </span>
        </div>
        
        <div *ngIf="project.website" class="mt-4">
          <a [href]="project.website" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visit Website
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProjectCardComponent {
  @Input() project!: Project;
}

