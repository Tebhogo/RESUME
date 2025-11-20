import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function About() {
  const [majorProjects, setMajorProjects] = useState([])
  const [primarySkills, setPrimarySkills] = useState([])
  const [additionalSkills, setAdditionalSkills] = useState([])

  useEffect(() => {
    // Load major projects
    fetch('/RESUME/assets/data/projects.json')
      .then(res => res.json())
      .then(data => {
        setMajorProjects([
          data.find(p => p.id === 1), // Stock Take App
          data.find(p => p.id === 2), // Power BI Sales Dashboard
          data.find(p => p.id === 6), // Report Builder
          data.find(p => p.id === 4)  // Cyber Cotheth Tech Networks
        ].filter(p => p !== undefined))
      })
      .catch(err => console.error('Error loading projects:', err))

    // Load skills
    fetch('/RESUME/assets/data/skills.json')
      .then(res => res.json())
      .then(data => {
        setPrimarySkills(data.primary || [])
        setAdditionalSkills(data.additional || [])
      })
      .catch(err => console.error('Error loading skills:', err))
  }, [])

  const getProjectIcon = (title) => {
    const t = title.toLowerCase()
    if (t.includes('stock') || t.includes('app')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
    if (t.includes('power bi') || t.includes('dashboard')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
    if (t.includes('report')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
    if (t.includes('cyber') || t.includes('cotheth')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
    return null
  }

  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase()
    if (name.includes('java')) {
      return <img src="assets/icons/java.png" alt="Java" className="w-6 h-6 object-contain" />
    }
    if (name.includes('python')) {
      return <img src="assets/icons/python.png" alt="Python" className="w-6 h-6 object-contain" />
    }
    if (name.includes('sql') || name.includes('database')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-black mb-4">
              About <span className="text-orange-500">Me</span>
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-orange-500 flex-shrink-0">
                <img src="assets/icons/LIyandah.jpeg" alt="Liyandah Hela" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-black mb-2">Liyandah Tebhogo Hela</h2>
                <p className="text-xl text-orange-500 mb-4">Analyst Programmer</p>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center justify-center md:justify-start">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:liyandahhella12@gmail.com" className="hover:text-orange-500 transition-colors">
                      liyandahhella12@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a href="https://www.linkedin.com/in/liyandah-hela-b48481166" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                      LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold text-black mb-4">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Experienced Data Analyst and qualified Computer Engineer currently working in the information and technology industry. Possesses excellent IT management, influencing, and leadership skills used to build effective relationships with clients and internal teams. Proficient in creating interactive dashboards and writing complex SQL queries to extract, analyze, and visualize data. Strong organizational skills with the ability to effectively prioritize and manage multiple tasks under any circumstances. Seeking an opportunity to apply strong conceptual and promotional capabilities, combined with diverse technological experience and knowledge, in an ever-changing industry.
              </p>
              
              {/* Work Experience */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Work Experience
                </h3>
                
                <div className="space-y-6">
                  {/* OK Zimbabwe */}
                  <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-black">OK Zimbabwe</h4>
                        <p className="text-lg text-orange-500 font-semibold">Analyst Programmer & Power BI Manager</p>
                      </div>
                      <span className="text-gray-600 font-medium mt-2 md:mt-0">2023 - PRESENT</span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Analyzing business requirements and developing software solutions to meet company needs.</li>
                      <li>Designing, testing, and deploying custom applications for various business departments.</li>
                      <li>Managing and maintaining Power BI dashboards, ensuring accurate and real-time data visualizations for informed decision-making.</li>
                      <li>Collaborating with business stakeholders to identify data trends, issues, and opportunities for process improvement.</li>
                      <li>Conducting data analysis and providing actionable insights through reports and visualizations in Power BI.</li>
                      <li>Developing and optimizing SQL queries to support data extraction and reporting.</li>
                      <li>Ensuring data integrity and security in reporting processes and assisting with user training on Power BI.</li>
                    </ul>
                  </div>
                  
                  {/* Gain Cash and Carry */}
                  <div className="bg-white border-l-4 border-orange-500 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-black">Gain Cash and Carry Zimbabwe</h4>
                        <p className="text-lg text-orange-500 font-semibold">Junior IT Support</p>
                      </div>
                      <span className="text-gray-600 font-medium mt-2 md:mt-0">2019 - 2022</span>
                    </div>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Performed basic problem solving and assistance on various software applications and hardware systems for department users.</li>
                      <li>Provided individual instruction and/or training to users on new or updated technologies. Trained staff employees.</li>
                      <li>Performed routine technical assistance and maintenance duties. Input billing information into a record keeping system.</li>
                      <li>Assisted with the review, evaluation and recommendation of solutions relating to hardware and software acquisitions and/or network updates.</li>
                      <li>Provided technical assistance with computer hardware and software.</li>
                      <li>Assisted with the installation, configuration and maintenance of computers, workstations and/or other related equipment and devices.</li>
                      <li>Resolved issues for staff via phone, in person, or electronically.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v9M12 14l-9-5M12 14l9-5M12 9v5" />
                  </svg>
                  Education
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-orange-500 p-5 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-black mb-1">CompTIA A+ Certification</h4>
                    <p className="text-gray-600">Alison Online</p>
                    <p className="text-gray-500 text-sm">2023</p>
                  </div>
                  
                  <div className="bg-white border-l-4 border-orange-500 p-5 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-black mb-1">Diploma in Computer Engineering</h4>
                    <p className="text-gray-600">Specis College Zimbabwe, ABMA Education, UK</p>
                    <p className="text-gray-500 text-sm">2017 - 2018</p>
                  </div>
                  
                  <div className="bg-white border-l-4 border-orange-500 p-5 rounded-lg shadow-md">
                    <h4 className="text-lg font-bold text-black mb-1">Certificate in Computer Engineering</h4>
                    <p className="text-gray-600">Specis College Zimbabwe, ABMA Education, UK</p>
                    <p className="text-gray-500 text-sm">2016 - 2017</p>
                  </div>
                </div>
              </div>
              
              {/* Major Projects */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Major Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {majorProjects.map(project => (
                    <div key={project.id} className="bg-white border-l-4 border-orange-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white">
                          {getProjectIcon(project.title)}
                        </div>
                        <h4 className="text-lg font-bold text-black">{project.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.website && (
                        <div className="mt-3">
                          <a 
                            href={project.website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Languages */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Languages I Use
                </h3>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="text-center md:text-left">
                      <span className="px-6 py-3 bg-white text-orange-700 rounded-full font-bold text-lg shadow-md inline-block">English (Fluent)</span>
                    </div>
                    <div className="text-center md:text-left">
                      <span className="px-6 py-3 bg-white text-orange-700 rounded-full font-bold text-lg shadow-md inline-block">Shona</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Programming Languages & Technologies */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Programming Languages & Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border-l-4 border-orange-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white overflow-hidden">
                        <img src="assets/icons/java.png" alt="Java" className="w-8 h-8 object-contain" />
                      </div>
                      <h4 className="text-xl font-bold text-black">Java (Spring Framework)</h4>
                    </div>
                    <p className="text-gray-600">Backend development, microservices, and REST APIs.</p>
                  </div>
                  
                  <div className="bg-white border-l-4 border-orange-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white overflow-hidden">
                        <img src="assets/icons/python.png" alt="Python" className="w-8 h-8 object-contain" />
                      </div>
                      <h4 className="text-xl font-bold text-black">Python</h4>
                    </div>
                    <p className="text-gray-600">Data engineering, scripting, and automation.</p>
                  </div>
                  
                  <div className="bg-white border-l-4 border-orange-500 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-black">SQL</h4>
                    </div>
                    <p className="text-gray-600">Database design, querying, and management.</p>
                  </div>
                </div>
              </div>
              
              {/* Known Skills */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Known Skills
                </h3>
                
                {/* Primary Skills */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-black mb-4">Primary Skills</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {primarySkills.map((skill, index) => (
                      <div key={index} className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white overflow-hidden">
                            {getSkillIcon(skill.name)}
                          </div>
                          <h5 className="text-lg font-bold text-black">{skill.name}</h5>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{skill.description}</p>
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* D365 Highlight */}
                <div className="mb-6 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-6 border-2 border-orange-300">
                  <h4 className="text-xl font-semibold text-black mb-4 flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Microsoft Dynamics 365 (D365)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h5 className="font-bold text-black mb-2 flex items-center">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        D365 Frontend
                      </h5>
                      <p className="text-gray-600 text-sm">Frontend development, customization, and user interface design</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                      <h5 className="font-bold text-black mb-2 flex items-center">
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        D365 Backend
                      </h5>
                      <p className="text-gray-600 text-sm">Backend development, APIs, integration, and data management</p>
                    </div>
                  </div>
                </div>
                
                {/* Additional Skills - Summarized */}
                <div>
                  <h4 className="text-xl font-semibold text-black mb-4">Additional Skills</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white border-l-4 border-orange-500 rounded-lg p-5 shadow-md">
                      <h5 className="font-bold text-black mb-3 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Data & Analytics
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">Power BI, Power BI Reporting Server, Tableau, Google Data Studio, Statistical Analysis (R, SAS, SPSS), Data Visualization, Report Building, Dashboard Design</p>
                    </div>
                    
                    <div className="bg-white border-l-4 border-orange-500 rounded-lg p-5 shadow-md">
                      <h5 className="font-bold text-black mb-3 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Database & Backend
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">MSSQL Server, Database Creation & Design, API Integration, REST APIs</p>
                    </div>
                    
                    <div className="bg-white border-l-4 border-orange-500 rounded-lg p-5 shadow-md">
                      <h5 className="font-bold text-black mb-3 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Development
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">Angular, Flutter, HTML/CSS/JavaScript, Mobile App Development, Web Development</p>
                    </div>
                    
                    <div className="bg-white border-l-4 border-orange-500 rounded-lg p-5 shadow-md">
                      <h5 className="font-bold text-black mb-3 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Microsoft Technologies
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">Dynamics 365 (D365) Frontend & Backend, Excel (Advanced), Power Platform</p>
                    </div>
                    
                    <div className="bg-white border-l-4 border-orange-500 rounded-lg p-5 shadow-md">
                      <h5 className="font-bold text-black mb-3 flex items-center">
                        <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Data Science & Analysis
                      </h5>
                      <p className="text-gray-600 text-sm mb-2">Data Interpretation, Statistical Analysis, Machine Learning (in progress), Critical Thinking, Problem Solving</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-lg p-5 shadow-md flex items-center justify-center">
                      <Link to="/skills" className="text-center">
                        <svg className="w-8 h-8 text-orange-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <p className="font-bold text-black">View All Skills</p>
                        <p className="text-gray-600 text-sm mt-1">See complete list</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About



