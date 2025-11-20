import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProjectCardComponent, Project } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="min-h-screen bg-white py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-black mb-4">
            My <span class="text-orange-500">Projects</span>
          </h1>
          <div class="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my work in enterprise applications, dashboards, and web development
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-project-card *ngFor="let project of projects" [project]="project"></app-project-card>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Project[]>('/assets/data/projects.json').subscribe(data => {
      this.projects = data;
    });
  }
}

