import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  template: `
    <app-hero></app-hero>
    
    <section class="py-16 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-black">
          Featured <span class="text-orange-500">Projects</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div *ngFor="let project of featuredProjects" 
               class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div class="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <div class="text-center p-4">
                <!-- App Icon for Stock Take App -->
                <svg *ngIf="project.title.toLowerCase().includes('stock') || project.title.toLowerCase().includes('app')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <!-- Dashboard Icon for Power BI/Dashboard projects -->
                <svg *ngIf="(project.title.toLowerCase().includes('power bi') || project.title.toLowerCase().includes('dashboard')) && !project.title.toLowerCase().includes('stock') && !project.title.toLowerCase().includes('app')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <!-- Report Icon for Report projects -->
                <svg *ngIf="project.title.toLowerCase().includes('report') && !project.title.toLowerCase().includes('stock') && !project.title.toLowerCase().includes('app') && !project.title.toLowerCase().includes('power bi') && !project.title.toLowerCase().includes('dashboard')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <!-- Database Icon for Database projects -->
                <svg *ngIf="project.title.toLowerCase().includes('database') || project.title.toLowerCase().includes('mssql')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <!-- Default Icon for other projects -->
                <svg *ngIf="!project.title.toLowerCase().includes('stock') && !project.title.toLowerCase().includes('app') && !project.title.toLowerCase().includes('power bi') && !project.title.toLowerCase().includes('dashboard') && !project.title.toLowerCase().includes('report') && !project.title.toLowerCase().includes('database') && !project.title.toLowerCase().includes('mssql')" class="w-16 h-16 mx-auto text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p class="text-sm text-gray-600">{{ project.title }}</p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-black mb-3">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.technologies.slice(0, 3)" 
                      class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                  {{ tech }}
                </span>
              </div>
              <a routerLink="/projects" class="text-orange-500 hover:text-orange-600 font-semibold">
                View All Projects →
              </a>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a routerLink="/projects" class="btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
    
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-black">
          Core <span class="text-orange-500">Skills</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div *ngFor="let skill of primarySkills" 
               class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white overflow-hidden">
              <!-- Java Icon -->
              <img *ngIf="skill.name.toLowerCase().includes('java')" src="assets/icons/java.png" alt="Java" class="w-10 h-10 object-contain">
              <!-- Python Icon -->
              <img *ngIf="skill.name.toLowerCase().includes('python')" src="assets/icons/python.png" alt="Python" class="w-10 h-10 object-contain">
              <!-- SQL/Database Icon -->
              <svg *ngIf="skill.name.toLowerCase().includes('sql') || skill.name.toLowerCase().includes('database')" class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-black mb-2">{{ skill.name }}</h3>
            <p class="text-gray-600">{{ skill.description }}</p>
          </div>
        </div>
        <div class="text-center mt-8">
          <a routerLink="/skills" class="btn-secondary">
            View All Skills
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  featuredProjects: any[] = [];
  primarySkills: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('/assets/data/projects.json').subscribe(projects => {
      this.featuredProjects = projects.slice(0, 3);
    });
    
    this.http.get<any>('/assets/data/skills.json').subscribe(skills => {
      this.primarySkills = skills.primary;
    });
  }
}

