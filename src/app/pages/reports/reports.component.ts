import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-5xl font-bold text-black mb-4">
            Business <span class="text-orange-500">Reports</span>
          </h1>
          <div class="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Over 30+ custom operational and analytical reports developed for OK Zimbabwe
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-orange-50 to-white rounded-lg shadow-lg p-8 mb-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl font-bold text-black mb-4">Report Builder Project</h2>
              <p class="text-gray-700 text-lg leading-relaxed mb-6">
                I have created more than 30+ custom operational and analytical reports across various departments for OK Zimbabwe. These reports provide critical business insights and support data-driven decision making. I have also configured Power BI Reporting Server infrastructure and designed MSSQL databases to support enterprise reporting needs.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="font-bold text-black mb-1">Operational Reports</h3>
                    <p class="text-gray-600">Daily, weekly, and monthly operational reports for various departments</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="font-bold text-black mb-1">Analytical Reports</h3>
                    <p class="text-gray-600">Deep-dive analytical reports with insights and recommendations</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="font-bold text-black mb-1">Power BI Reporting Server</h3>
                    <p class="text-gray-600">Configured and deployed Power BI Reporting Server for enterprise report distribution</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="font-bold text-black mb-1">MSSQL Database Management</h3>
                    <p class="text-gray-600">Designed and created MSSQL Server databases to support reporting infrastructure</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="font-bold text-black mb-1">Dashboard Integration</h3>
                    <p class="text-gray-600">Reports integrated with Power BI dashboards for real-time visualization</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-lg p-8 shadow-md">
              <h3 class="text-2xl font-bold text-black mb-6">Technologies Used</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Power BI Reporting Server</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">MSSQL Server</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">SQL & Database Design</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Power BI</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Excel (Advanced)</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Reporting Tools</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span class="text-gray-700">Data Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="text-4xl font-bold text-orange-500 mb-2">30+</div>
            <div class="text-gray-600">Reports Created</div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div class="text-gray-600">Data-Driven</div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="text-4xl font-bold text-orange-500 mb-2">OK</div>
            <div class="text-gray-600">Zimbabwe</div>
          </div>
        </div>
        
        <!-- Power BI Reporting Server Setup Section -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8 border-2 border-orange-200">
          <div class="text-center mb-8">
            <h2 class="text-4xl font-bold text-black mb-4">
              Power BI Reporting Server <span class="text-orange-500">Setup & Configuration</span>
            </h2>
            <div class="w-32 h-1 bg-orange-500 mx-auto mb-4"></div>
            <p class="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive setup and configuration of Power BI Reporting Server for enterprise reporting infrastructure
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Setup Process -->
            <div class="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6">
              <h3 class="text-2xl font-bold text-black mb-4 flex items-center">
                <svg class="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Server Installation & Setup
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 class="font-semibold text-black mb-1">Prerequisites & Planning</h4>
                    <p class="text-gray-600 text-sm">Assess server requirements, hardware specifications, and network infrastructure. Plan for scalability and high availability.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 class="font-semibold text-black mb-1">Installation & Configuration</h4>
                    <p class="text-gray-600 text-sm">Install Power BI Reporting Server, configure service accounts, set up database catalog, and configure web portal access.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 class="font-semibold text-black mb-1">Security & Authentication</h4>
                    <p class="text-gray-600 text-sm">Configure Windows Authentication, set up role-based access control (RBAC), and implement secure data source connections.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                  <div>
                    <h4 class="font-semibold text-black mb-1">Data Source Configuration</h4>
                    <p class="text-gray-600 text-sm">Connect to MSSQL Server databases, configure shared data sources, and set up connection strings for report deployment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Configuration Details -->
            <div class="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6">
              <h3 class="text-2xl font-bold text-black mb-4 flex items-center">
                <svg class="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Configuration & Deployment
              </h3>
              <div class="space-y-4">
                <div class="bg-white rounded p-4 border-l-4 border-orange-500">
                  <h4 class="font-semibold text-black mb-2">Web Portal Configuration</h4>
                  <ul class="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>Configure web portal URL and port settings</li>
                    <li>Set up SSL certificates for secure access</li>
                    <li>Configure branding and custom themes</li>
                  </ul>
                </div>
                <div class="bg-white rounded p-4 border-l-4 border-orange-500">
                  <h4 class="font-semibold text-black mb-2">Report Deployment</h4>
                  <ul class="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>Deploy Power BI reports (.pbix files)</li>
                    <li>Configure report schedules and subscriptions</li>
                    <li>Set up report caching and performance optimization</li>
                  </ul>
                </div>
                <div class="bg-white rounded p-4 border-l-4 border-orange-500">
                  <h4 class="font-semibold text-black mb-2">Integration Setup</h4>
                  <ul class="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>Integrate with MSSQL Server databases</li>
                    <li>Configure data refresh schedules</li>
                    <li>Set up email subscriptions and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Technical Specifications -->
          <div class="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-bold text-black mb-4">Technical Specifications & Capabilities</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded p-4">
                <h4 class="font-semibold text-black mb-2 flex items-center">
                  <svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                  Server Management
                </h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Server installation & configuration</li>
                  <li>• Service account setup</li>
                  <li>• Performance monitoring</li>
                  <li>• Backup & disaster recovery</li>
                </ul>
              </div>
              <div class="bg-white rounded p-4">
                <h4 class="font-semibold text-black mb-2 flex items-center">
                  <svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Security & Access
                </h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• Windows Authentication</li>
                  <li>• Role-based access control</li>
                  <li>• Secure data connections</li>
                  <li>• SSL/TLS configuration</li>
                </ul>
              </div>
              <div class="bg-white rounded p-4">
                <h4 class="font-semibold text-black mb-2 flex items-center">
                  <svg class="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  Database Integration
                </h4>
                <ul class="text-gray-600 text-sm space-y-1">
                  <li>• MSSQL Server connectivity</li>
                  <li>• Data source configuration</li>
                  <li>• Query optimization</li>
                  <li>• Data refresh scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ReportsComponent {}

