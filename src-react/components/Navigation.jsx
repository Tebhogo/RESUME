import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
              Liyandah Hela
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                isActive('/about') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className={`transition-colors font-medium ${
                isActive('/skills') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors font-medium ${
                isActive('/projects') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/reports" 
              className={`transition-colors font-medium ${
                isActive('/reports') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
            >
              Reports
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${
                isActive('/contact') ? 'text-orange-500' : 'text-black hover:text-orange-500'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-black hover:text-orange-500 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {!isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/') ? 'bg-orange-50 text-orange-500' : 'text-black hover:bg-orange-50 hover:text-orange-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/about') ? 'bg-orange-50 text-orange-500' : 'text-black hover:bg-orange-50 hover:text-orange-500'
              }`}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/skills') ? 'bg-orange-50 text-orange-500' : 'text-black hover:bg-orange-50 hover:text-orange-500'
              }`}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/projects') ? 'bg-orange-50 text-orange-500' : 'text-black hover:bg-orange-50 hover:text-orange-500'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/reports" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/reports') ? 'bg-orange-50 text-orange-500' : 'text-black hover:bg-orange-50 hover:text-orange-500'
              }`}
            >
              Reports
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md ${
                isActive('/contact') ? 'bg-orange-50 text-orange-500' : 'text-black hover:bg-orange-50 hover:text-orange-500'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation



