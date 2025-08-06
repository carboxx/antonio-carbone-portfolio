export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span className="text-blue-600">Antonio</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 mb-8">
            AI Engineer & Innovation Leader
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I build intelligent systems that solve real-world problems using 
            <span className="font-semibold text-gray-800"> Machine Learning</span>, 
            <span className="font-semibold text-gray-800"> Deep Learning</span>, and 
            <span className="font-semibold text-gray-800"> AI-driven solutions</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Projects
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>

          {/* Tech Stack */}
          <div className="max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
              Technologies I Work With
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Python', 'PyTorch', 'TensorFlow', 'Transformers', 'LLM',
                'Computer Vision', 'NLP', 'TypeScript', 'Next.js', 'Docker'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-white/80 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">AI Projects</div>
            </div>
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600">Leadership Roles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}