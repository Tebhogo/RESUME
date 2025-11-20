import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([])
  const [primarySkills, setPrimarySkills] = useState([])

  useEffect(() => {
    // Load projects
    fetch('assets/data/projects.json')
      .then(res => res.json())
      .then(data => {
        setFeaturedProjects(data.slice(0, 3))
      })
      .catch(err => console.error('Error loading projects:', err))

    // Load skills
    fetch('assets/data/skills.json')
      .then(res => res.json())
      .then(data => {
        setPrimarySkills(data.primary || [])
      })
      .catch(err => console.error('Error loading skills:', err))
  }, [])

  const getIconForSkill = (skillName) => {
    const name = skillName.toLowerCase()
    if (name.includes('java')) {
      return <img src="assets/icons/java.png" alt="Java" className="w-10 h-10 object-contain" />
    }
    if (name.includes('python')) {
      return <img src="assets/icons/python.png" alt="Python" className="w-10 h-10 object-contain" />
    }
    if (name.includes('sql') || name.includes('database')) {
      return (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
    return null
  }

  return (
    <div>
      <Hero />
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Core <span className="text-orange-500">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primarySkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white overflow-hidden">
                  {getIconForSkill(skill.name)}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/skills" className="btn-secondary">
              View All Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home



