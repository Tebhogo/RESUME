import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  
  getIconForSkill(skillName: string): string {
    const name = skillName.toLowerCase();
    
    // Programming Languages
    if (name.includes('java') || name.includes('spring')) {
      return this.getJavaIcon();
    }
    if (name.includes('python')) {
      return this.getPythonIcon();
    }
    if (name.includes('sql') || name.includes('database')) {
      return this.getDatabaseIcon();
    }
    if (name.includes('angular')) {
      return this.getAngularIcon();
    }
    if (name.includes('flutter')) {
      return this.getMobileIcon();
    }
    if (name.includes('html') || name.includes('css') || name.includes('javascript')) {
      return this.getWebIcon();
    }
    
    // Microsoft Technologies
    if (name.includes('power bi') || name.includes('powerbi')) {
      return this.getPowerBIIcon();
    }
    if (name.includes('d365') || name.includes('dynamics')) {
      return this.getD365Icon();
    }
    if (name.includes('mssql') || name.includes('sql server')) {
      return this.getSQLServerIcon();
    }
    if (name.includes('excel')) {
      return this.getExcelIcon();
    }
    
    // Data & Analytics
    if (name.includes('tableau')) {
      return this.getTableauIcon();
    }
    if (name.includes('data visualization') || name.includes('dashboard')) {
      return this.getDashboardIcon();
    }
    if (name.includes('report')) {
      return this.getReportIcon();
    }
    if (name.includes('statistical') || name.includes('r ') || name.includes('sas') || name.includes('spss')) {
      return this.getAnalyticsIcon();
    }
    if (name.includes('machine learning') || name.includes('ml')) {
      return this.getMLIcon();
    }
    
    // General
    if (name.includes('api') || name.includes('integration')) {
      return this.getAPIIcon();
    }
    if (name.includes('app') || name.includes('application')) {
      return this.getAppIcon();
    }
    
    // Default icon
    return this.getDefaultIcon();
  }
  
  private getJavaIcon(): string {
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.851 18.56s-.794.037-1.105-.29c-.25-.25-.33-.457-.234-.84.214-.873 1.305-1.15 2.322-1.292 1.018-.144 2.055-.168 3.196.044.455.085.836.27 1.12.554.25.25.344.554.25.873-.047.16-.18.3-.234.437-.25.65-.65 1.12-1.12 1.475-.554.436-1.225.65-1.897.794-.65.144-1.32.144-1.953.07-.65-.072-1.272-.25-1.85-.554-.457-.24-.873-.554-1.15-.97-.144-.21-.21-.457-.18-.7.03-.25.144-.48.33-.65.25-.25.554-.33.873-.33.65 0 1.15.554 1.15 1.15 0 .65-.554 1.15-1.15 1.15-.25 0-.48-.07-.65-.21-.18-.144-.3-.33-.33-.554-.07-.457.18-.873.554-1.15.65-.48 1.475-.65 2.322-.65.873 0 1.725.18 2.5.554.554.25 1.018.65 1.32 1.15.18.3.25.65.18 1.018-.07.373-.25.7-.48 1.018-.48.65-1.15 1.15-1.897 1.475-.75.33-1.575.48-2.4.554-.825.072-1.65.036-2.4-.18zm-2.322-4.322s-1.15.554-1.897.554c-.75 0-.873-.554-.554-1.15.18-.373.554-.65 1.018-.873.554-.25 1.15-.373 1.725-.373.554 0 1.15.072 1.65.25.48.18.873.48 1.15.873.18.25.25.554.18.873-.07.33-.25.65-.48.873-.48.457-1.15.65-1.897.65-.75 0-1.575-.18-2.4-.554zm12.322 2.5s.794.037 1.105-.29c.25-.25.33-.457.234-.84-.214-.873-1.305-1.15-2.322-1.292-1.018-.144-2.055-.168-3.196.044-.455.085-.836.27-1.12.554-.25.25-.344.554-.25.873.047.16.18.3.234.437.25.65.65 1.12 1.12 1.475.554.436 1.225.65 1.897.794.65.144 1.32.144 1.953.07.65-.072 1.272-.25 1.85-.554.457-.24.873-.554 1.15-.97.144-.21.21-.457.18-.7-.03-.25-.144-.48-.33-.65-.25-.25-.554-.33-.873-.33-.65 0-1.15.554-1.15 1.15 0 .65.554 1.15 1.15 1.15.25 0 .48-.07.65-.21.18-.144.3-.33.33-.554.07-.457-.18-.873-.554-1.15-.65-.48-1.475-.65-2.322-.65-.873 0-1.725.18-2.5.554-.554.25-1.018.65-1.32 1.15-.18.3-.25.65-.18 1.018.07.373.25.7.48 1.018.48.65 1.15 1.15 1.897 1.475.75.33 1.575.48 2.4.554.825.072 1.65.036 2.4-.18zm2.322-4.322s1.15.554 1.897.554c.75 0 .873-.554.554-1.15-.18-.373-.554-.65-1.018-.873-.554-.25-1.15-.373-1.725-.373-.554 0-1.15.072-1.65.25-.48.18-.873.48-1.15.873-.18.25-.25.554-.18.873.07.33.25.65.48.873.48.457 1.15.65 1.897.65.75 0 1.575-.18 2.4-.554z"/></svg>`;
  }
  
  private getPythonIcon(): string {
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 2.5c0 .83.67 1.5 1.5 1.5h1.5c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5H16c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5h-1.5c-.83 0-1.5.67-1.5 1.5v1.5c0 .83.67 1.5 1.5 1.5h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-3c-.83 0-1.5.67-1.5 1.5zm-9 0C5.5 1.67 4.83 1 4 1H1C.67 1 0 1.67 0 2.5v3c0 .83.67 1.5 1.5 1.5H4c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5H1.5C.67 13 0 13.67 0 14.5v3C0 18.33.67 19 1.5 19H4c.83 0 1.5.67 1.5 1.5v1.5c0 .83.67 1.5 1.5 1.5h3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6c-.83 0-1.5.67-1.5 1.5z"/></svg>`;
  }
  
  private getDatabaseIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`;
  }
  
  private getAngularIcon(): string {
    return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.93 12.645h4.134L11.998 7.74zM11.998.017L.19 4.055l1.852 14.778 9.956 5.149 9.956-5.149L23.806 4.055 11.998.017zm7.149 17.51h-2.636l-1.422-3.678H8.91l-1.422 3.678H4.852L11.998 2.662l7.149 14.865z"/></svg>`;
  }
  
  private getMobileIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`;
  }
  
  private getWebIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`;
  }
  
  private getPowerBIIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`;
  }
  
  private getD365Icon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`;
  }
  
  private getSQLServerIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`;
  }
  
  private getExcelIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`;
  }
  
  private getTableauIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`;
  }
  
  private getDashboardIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`;
  }
  
  private getReportIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`;
  }
  
  private getAnalyticsIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`;
  }
  
  private getMLIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`;
  }
  
  private getAPIIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`;
  }
  
  private getAppIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`;
  }
  
  private getDefaultIcon(): string {
    return `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`;
  }
}




