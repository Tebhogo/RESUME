import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-black mb-4">
            Technical <span class="text-orange-500">Skills</span>
          </h1>
          <div class="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>
        
        <!-- Primary Skills -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-black mb-8 text-center">Primary Skills</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div *ngFor="let skill of primarySkills" 
                 class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-orange-500">
              <div class="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white overflow-hidden">
                <img *ngIf="skill.name.toLowerCase().includes('java')" src="assets/icons/java.png" alt="Java" class="w-12 h-12 object-contain">
                <img *ngIf="skill.name.toLowerCase().includes('python')" src="assets/icons/python.png" alt="Python" class="w-12 h-12 object-contain">
                <svg *ngIf="skill.name.toLowerCase().includes('sql') || skill.name.toLowerCase().includes('database')" class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-black mb-3 text-center">{{ skill.name }}</h3>
              <p class="text-gray-600 text-center mb-4">{{ skill.description }}</p>
              <div class="text-center">
                <span class="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                  {{ skill.level }}
                </span>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Additional Skills -->
        <section>
          <h2 class="text-3xl font-bold text-black mb-8 text-center">Additional Skills</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div *ngFor="let skill of additionalSkills" 
                 class="bg-gray-50 rounded-lg p-6 hover:bg-orange-50 transition-colors border border-gray-200">
              <div class="flex items-center mb-3">
                <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white">
                  <svg *ngIf="skill.name.toLowerCase().includes('power bi')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('angular')" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.93 12.645h4.134L11.998 7.74zM11.998.017L.19 4.055l1.852 14.778 9.956 5.149 9.956-5.149L23.806 4.055 11.998.017zm7.149 17.51h-2.636l-1.422-3.678H8.91l-1.422 3.678H4.852L11.998 2.662l7.149 14.865z"/>
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('flutter')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('html') || skill.name.toLowerCase().includes('css') || skill.name.toLowerCase().includes('javascript')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('mssql') || skill.name.toLowerCase().includes('sql server')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('excel')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('tableau')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('api')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('machine learning') || skill.name.toLowerCase().includes('ml')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('d365') || skill.name.toLowerCase().includes('dynamics')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('data visualization') || skill.name.toLowerCase().includes('dashboard')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('report')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <svg *ngIf="skill.name.toLowerCase().includes('database')" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-black">{{ skill.name }}</h3>
              </div>
              <p class="text-gray-600">{{ skill.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class SkillsComponent implements OnInit {
  primarySkills: any[] = [];
  additionalSkills: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/data/skills.json').subscribe(data => {
      this.primarySkills = data.primary;
      this.additionalSkills = data.additional;
    });
  }
}

