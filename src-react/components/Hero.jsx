import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
              Hi, I'm <span className="text-orange-500">Liyandah</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Full Stack Software Engineer & Data Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Full stack developer and data engineer with 7+ years in IT. Currently building secure payment gateway systems at ANGWA PAY. Experienced in Java Spring, Python, SQL, Power BI, and enterprise application development across retail and fintech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-orange-500">
              <img src="/RESUME/icons/LIyandah.jpeg" alt="Liyandah Hela" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



