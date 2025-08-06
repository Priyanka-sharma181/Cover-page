import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, PenTool as Tools, Award, GraduationCap, User, Briefcase, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Priyanka Sharma</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Priyanka <span className="text-blue-600">Sharma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light mb-6">Backend Developer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Versatile software developer with 3 years of experience crafting innovative and scalable solutions. 
              Proficient in modern backend technologies and cloud platforms.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:priyankasharma76994074441@gmail.com" 
               className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://github.com/Priyanka-sharma181" 
               className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/priyanka-sharma-6ab496205/" 
               className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="tel:+918085540441" 
               className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone size={20} />
              <span>+91 8085540441</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center mb-12">
            <User className="text-blue-600 mr-4" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Versatile software developer with 3 years of experience crafting innovative and scalable solutions. 
              Proficient in JavaScript, NestJS, ExpressJS, Node.js, Python (basic), SQL, BigQuery, and cloud 
              technologies including AWS. Skilled in tools such as Jest, Data Studio, Google Apps Script, 
              Google Sheets, Git, and GitHub. Demonstrated ability to deliver high-quality projects on time 
              and within budget. Strong in problem-solving, collaboration, and adapting to new technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-12">
            <Briefcase className="text-blue-600 mr-4" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {/* Main Role */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Backend Developer</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">Madgical Techdom (OPC) Private Limited</p>
                  <p className="text-gray-600">2022 – Present</p>
                </div>
              </div>

              {/* Sarvdevsthanam Project */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <ChevronRight className="text-blue-600 mr-2" size={20} />
                  Sarvdevsthanam
                </h4>
                <p className="text-gray-600 mb-4">
                  Temple management platform with separate apps for devotees and priests, enabling online 
                  pooja bookings, live virtual rituals via WebRTC, donation payments
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Designed and developed backend architecture using NestJS to support both devotee and priest mobile applications</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Built and maintained secure, scalable RESTful APIs for authentication, bookings, donations, and user interactions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Integrated WebRTC with Ant Media Server for live virtual pooja streaming functionality</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Managed database operations using PostgreSQL with Prisma ORM, ensuring efficient querying, relational mapping, and data integrity</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Implemented payment processing with Razorpay, including order creation, transaction status tracking, and history management</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Coordinated with frontend teams for seamless API integration, and ensured structured and consistent data delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chatbot Projects */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <ChevronRight className="text-blue-600 mr-2" size={20} />
                  Chatbot Projects
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Developed and integrated a WhatsApp chatbot using Node.js and WhatsApp Business API, improving communication between teachers and students</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Developed an AI-powered chatbot using the SwiftChat API, designed to provide spiritual insights from the Ramayana and Bhagavad Gita, with DynamoDB used for data storage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center mb-12">
            <Code className="text-blue-600 mr-4" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Programming Languages</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">JavaScript</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">TypeScript</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Python (Basic)</span>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Google Apps Script</span>
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Tools className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Frameworks & Libraries</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">ReactJS</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">React Native</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">NestJS</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">ExpressJS</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Expo</span>
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Database className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Databases</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">MySQL</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">MongoDB</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">DynamoDB</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">PostgreSQL (RDS)</span>
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">BigQuery</span>
              </div>
            </div>

            {/* API Development */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="text-orange-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">API Development</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">RESTful APIs</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Razorpay</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">WhatsApp API</span>
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">SwiftChat API</span>
              </div>
            </div>

            {/* Cloud & Tools */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Cloud className="text-teal-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Cloud & Tools</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">AWS</span>
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Git</span>
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">GitHub</span>
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Postman</span>
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">VS Code</span>
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Jest</span>
                <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Looker Studio</span>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <User className="text-rose-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Soft Skills</h3>
              </div>
              <div className="space-y-2">
                <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Communication</span>
                <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Teamwork</span>
                <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Problem-Solving</span>
                <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Time Management</span>
                <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">Adaptability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center mb-12">
            <GraduationCap className="text-blue-600 mr-4" size={32} />
            <h2 className="text-4xl font-bold text-gray-800">Education & Certifications</h2>
          </div>

          <div className="space-y-8">
            {/* Degree */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Bachelor of Science (B.Sc.) in Computer Science</h3>
                  <p className="text-lg text-blue-600 font-medium mb-1">Vikram University, Ujjain</p>
                </div>
              </div>
            </div>

            {/* Higher Secondary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Higher Secondary Education (12th Grade)</h3>
                  <p className="text-lg text-green-600 font-medium mb-1">PCM (Physics, Chemistry, Mathematics)</p>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Engineering Certificate</h3>
                  <p className="text-lg text-purple-600 font-medium mb-3">Navgurukul Foundation, Pune</p>
                  <p className="text-gray-700">
                    Completed a year-long residential software engineering programme at Navgurukul Foundation, Pune. 
                    Developed strong technical skills in Python, JavaScript, and Node.js, along with essential soft 
                    skills like problem-solving, leadership, team management, and communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-12">
            Ready to discuss your next project or opportunity? I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:priyankasharma76994074441@gmail.com" 
               className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all group">
              <Mail className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-blue-100 text-sm">Send me a message</p>
            </a>
            
            <a href="tel:+918085540441" 
               className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all group">
              <Phone className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-blue-100 text-sm">+91 8085540441</p>
            </a>
            
            <a href="https://github.com/Priyanka-sharma181" 
               className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all group">
              <Github className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-blue-100 text-sm">View my projects</p>
            </a>
            
            <a href="https://www.linkedin.com/in/priyanka-sharma-6ab496205/" 
               className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all group">
              <Linkedin className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-blue-100 text-sm">Let's connect professionally</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2024 Priyanka Sharma. Built with React and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}

export default App;