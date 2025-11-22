import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Download, GraduationCap, ChevronDown, ExternalLink } from 'lucide-react';
import { TerminalHero } from './components/TerminalHero';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillsSection } from './components/SkillsSection';
import { EXPERIENCES, EDUCATION, CONTACT_INFO } from './constants';
import { decode, formatPhone, createMailtoLink } from './utils/obfuscate';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-slate-900 tracking-tight"
          >
            Linyue<span className="text-indigo-600">Song</span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            {['Experience', 'Skills', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-indigo-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="#" 
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
                >
                     <div className="px-6 py-4 flex flex-col gap-4 text-slate-600">
                        {['Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-left py-2 hover:text-indigo-600 transition-colors"
                        >
                            {item}
                        </button>
                        ))}
                     </div>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-slate-50 to-slate-50"></div>
        
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
                Open for New Opportunities
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Building Scalable Systems & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                  Resilient AI
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Backend Framework Engineer at Asana. EECS Graduate from UC Berkeley. 
                Specializing in distributed systems, GraphQL, and ML safety.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95">
                  Get in Touch
                </button>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                  <Github size={20} /> GitHub
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <TerminalHero />
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Journey</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard key={index} data={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
              <GraduationCap size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Education</h2>
              <p className="text-slate-500">Academic foundation at UC Berkeley</p>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                    <p className="text-indigo-600 font-medium text-lg">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm">
                      GPA: {edu.gpa}
                    </div>
                    <p className="text-slate-500 text-sm mt-2">{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
                I'm currently based in {CONTACT_INFO.location} and open to discussing backend engineering or ML research roles.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a 
                  href={createMailtoLink(CONTACT_INFO.email)} 
                  className="flex items-center gap-4 hover:text-white transition-colors group"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = createMailtoLink(CONTACT_INFO.email);
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span data-contact="email">{decode(CONTACT_INFO.email)}</span>
                </a>
                <div className="flex items-center gap-4 hover:text-white transition-colors group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span data-contact="phone">{formatPhone(CONTACT_INFO.phone)}</span>
                </div>
                <div className="flex items-center gap-4 hover:text-white transition-colors group cursor-default">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <span>{CONTACT_INFO.location}</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-900 transition-all">
                  <Linkedin size={24} />
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-900 transition-all">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <form className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Hello Linyue..." />
              </div>
              <button className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                 Send Message <ExternalLink size={16} />
              </button>
            </form>
          </div>
          
          <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Linyue Song. Built with React, Tailwind & Framer Motion.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;