'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO SECTION - Clean & Fast */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Available for new opportunities
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Antonio Carbone
              </h1>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-blue-600 font-semibold mb-8">
                AI Engineer & Innovation Leader
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Building intelligent systems with <strong>Machine Learning</strong>, 
                <strong> Deep Learning</strong>, and <strong>AI-driven solutions</strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a 
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  View My Projects
                </a>
                <a 
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">AI/ML Projects</div>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Leadership Roles</div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="text-center">
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
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <p className="text-xl text-gray-600">
                Passionate about AI innovation with proven leadership experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p>Professional Photo</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Background</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Currently pursuing my <strong>Master's in Computer Engineering</strong> 
                      with focus on <strong>Artificial Intelligence</strong> at the University of Salerno. 
                      Strong foundation in both theoretical AI concepts and practical implementation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Experience</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Former <strong>Vice President of StudentIngegneria</strong> and 
                      <strong> Board Member</strong> at University of Salerno. 
                      Experienced in team management, strategic planning, and driving innovation initiatives.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Focus</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Specialized in developing intelligent systems using modern ML frameworks. 
                      Experience spans Deep Learning, Computer Vision, NLP, and Large Language Models.
                    </p>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="/resume.pdf" 
                      target="_blank"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      Download Resume
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m5-12a3 3 0 00-3-3H6a3 3 0 00-3 3v18a3 3 0 003 3h12a3 3 0 003-3V6z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600">
                AI/ML projects showcasing real-world problem solving
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Cards */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-4xl mb-2">🤖</div>
                      <p className="text-sm">Project Screenshot</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI Project #{i}</h3>
                  <p className="text-gray-600 mb-4">
                    Description of this amazing AI/ML project coming soon...
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">PyTorch</span>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Live Demo</a>
                    <a href="#" className="text-gray-600 hover:text-gray-700 font-medium">GitHub</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
              <p className="text-xl text-gray-600">
                My professional journey in AI and leadership
              </p>
            </div>

            <div className="space-y-8">
              {/* Experience Items */}
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-white font-bold">AI</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">AI Engineer</h3>
                  <p className="text-blue-600 font-medium mb-2">Affinity srl • 2024 - Present</p>
                  <p className="text-gray-600">
                    Developing AI solutions and intelligent systems for business applications.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-white font-bold">VP</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Vice President</h3>
                  <p className="text-blue-600 font-medium mb-2">StudentIngegneria Association • 2018 - 2021</p>
                  <p className="text-gray-600">
                    Led team management, event organization, and strategic planning initiatives.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-white font-bold">🎓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Board Member</h3>
                  <p className="text-blue-600 font-medium mb-2">University of Salerno • 2021 - 2024</p>
                  <p className="text-gray-600">
                    Strategic decision making and governance at institutional level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to collaborate on the next big AI project?
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:a.carbone613@gmail.com" className="text-blue-600 hover:text-blue-700">
                  a.carbone613@gmail.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/antoniocarbone97" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  antoniocarbone97
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">GitHub</h3>
                <a href="https://github.com/carboxx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                  carboxx
                </a>
              </div>
            </div>

            <a 
              href="mailto:a.carbone613@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}