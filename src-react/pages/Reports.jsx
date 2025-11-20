function Reports() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4">
            Business <span className="text-orange-500">Reports</span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Over 30+ custom operational and analytical reports developed
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-4">Report Builder Project</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I have created more than 30+ custom operational and analytical reports across various departments. These reports provide critical business insights and support data-driven decision making. I have also configured Power BI Reporting Server infrastructure and designed MSSQL databases to support enterprise reporting needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-black mb-1">Operational Reports</h3>
                    <p className="text-gray-600">Daily, weekly, and monthly operational reports for various departments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-black mb-1">Analytical Reports</h3>
                    <p className="text-gray-600">Deep-dive analytical reports with insights and recommendations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-black mb-1">Power BI Reporting Server</h3>
                    <p className="text-gray-600">Configured and deployed Power BI Reporting Server for enterprise report distribution</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-black mb-1">MSSQL Database Management</h3>
                    <p className="text-gray-600">Designed and created MSSQL Server databases to support reporting infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-black mb-1">Dashboard Integration</h3>
                    <p className="text-gray-600">Reports integrated with Power BI dashboards for real-time visualization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">Technologies Used</h3>
              <div className="space-y-3">
                {['Power BI Reporting Server', 'MSSQL Server', 'SQL & Database Design', 'Power BI', 'Excel (Advanced)', 'Reporting Tools', 'Data Visualization'].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
            <div className="text-gray-600">Reports Created</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-600">Data-Driven</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-2 border-orange-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-black mb-4">
              Power BI Reporting Server <span className="text-orange-500">Setup & Configuration</span>
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive setup and configuration of Power BI Reporting Server for enterprise reporting infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Server Installation & Setup
              </h3>
              <div className="space-y-4">
                {[
                  { num: 1, title: 'Prerequisites & Planning', desc: 'Assess server requirements, hardware specifications, and network infrastructure. Plan for scalability and high availability.' },
                  { num: 2, title: 'Installation & Configuration', desc: 'Install Power BI Reporting Server, configure service accounts, set up database catalog, and configure web portal access.' },
                  { num: 3, title: 'Security & Authentication', desc: 'Configure Windows Authentication, set up role-based access control (RBAC), and implement secure data source connections.' },
                  { num: 4, title: 'Data Source Configuration', desc: 'Connect to MSSQL Server databases, configure shared data sources, and set up connection strings for report deployment.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">{item.num}</div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6">
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Configuration & Deployment
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Web Portal Configuration', items: ['Configure web portal URL and port settings', 'Set up SSL certificates for secure access', 'Configure branding and custom themes'] },
                  { title: 'Report Deployment', items: ['Deploy Power BI reports (.pbix files)', 'Configure report schedules and subscriptions', 'Set up report caching and performance optimization'] },
                  { title: 'Integration Setup', items: ['Integrate with MSSQL Server databases', 'Configure data refresh schedules', 'Set up email subscriptions and alerts'] }
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded p-4 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-black mb-2">{section.title}</h4>
                    <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-black mb-4">Technical Specifications & Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', title: 'Server Management', items: ['Server installation & configuration', 'Service account setup', 'Performance monitoring', 'Backup & disaster recovery'] },
                { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', title: 'Security & Access', items: ['Windows Authentication', 'Role-based access control', 'Secure data connections', 'SSL/TLS configuration'] },
                { icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', title: 'Database Integration', items: ['MSSQL Server connectivity', 'Data source configuration', 'Query optimization', 'Data refresh scheduling'] }
              ].map((spec, index) => (
                <div key={index} className="bg-white rounded p-4">
                  <h4 className="font-semibold text-black mb-2 flex items-center">
                    <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={spec.icon} />
                    </svg>
                    {spec.title}
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {spec.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports




