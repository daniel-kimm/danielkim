import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Setup intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, shopping cart functionality, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'Developed a collaborative task management application with real-time updates using WebSocket technology. Features include drag-and-drop interfaces and team workspaces.',
      technologies: ['TypeScript', 'Socket.io', 'PostgreSQL', 'Redis'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Created a weather dashboard that displays current conditions and forecasts using multiple weather APIs. Implemented geolocation and interactive maps.',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'ChartJS'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'SQL/NoSQL',
    'AWS',
    'Docker',
    'Git'
  ];

  return (
    <div className="min-h-screen bg-zinc-100 scroll-smooth">
      <style jsx global>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header/Nav */}
      <nav className="bg-stone-600 text-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Jane Doe</h1>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-green-100 hover:text-white transition">About</a>
              <a href="#projects" className="text-green-100 hover:text-white transition">Projects</a>
              <a href="#skills" className="text-green-100 hover:text-white transition">Skills</a>
              <a href="#contact" className="text-green-100 hover:text-white transition">Contact</a>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#about" className="block text-green-100 hover:text-white transition py-2">About</a>
              <a href="#projects" className="block text-green-100 hover:text-white transition py-2">Projects</a>
              <a href="#skills" className="block text-green-100 hover:text-white transition py-2">Skills</a>
              <a href="#contact" className="block text-green-100 hover:text-white transition py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-stone-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Software Engineer
            </h1>
            <p className="text-lg md:text-xl text-green-200 mb-8 max-w-2xl mx-auto px-4">
              I build scalable web applications and solve complex problems with clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <a href="#contact" className="bg-stone-600 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition text-center">
                Get in touch
              </a>
              <a href="#projects" className="border border-green-200 px-6 py-3 rounded-lg hover:bg-stone-600 transition text-center">
                View my work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in order-2 md:order-1">
              <img 
                src="/api/placeholder/400/400" 
                alt="Jane Doe" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
              />
            </div>
            <div className="fade-in order-1 md:order-2">
              <h2 className="text-3xl font-bold text-stone-600 mb-6">About Me</h2>
              <p className="text-stone-700 mb-4">
                Hello! I'm Jane, a software engineer with a passion for creating elegant solutions to complex problems. With over 5 years of experience in full-stack development, I've had the privilege of working with diverse technologies and teams across various industries.
              </p>
              <p className="text-stone-700 mb-4">
                My journey in tech began at the University of Technology, where I earned my Computer Science degree. Since then, I've worked with startups and enterprise companies, helping build scalable applications that solve real-world problems.
              </p>
              <p className="text-stone-700">
                When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring the latest technologies in web development. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-600 mb-12 text-center fade-in">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-green-100 fade-in">
                <h3 className="text-xl font-bold mb-3 text-stone-600">{project.title}</h3>
                <p className="text-stone-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-green-50 px-3 py-1 rounded-full text-sm text-stone-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubLink} className="flex items-center gap-1 text-stone-600 hover:text-stone-800">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.liveLink} className="flex items-center gap-1 text-stone-600 hover:text-stone-800">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-stone-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-stone-600 px-6 py-3 rounded-lg text-green-100 fade-in">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-600 mb-12 text-center fade-in">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
            <a href="https://github.com" className="flex items-center gap-2 text-stone-600 hover:text-stone-800">
              <Github size={24} /> GitHub
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2 text-stone-600 hover:text-stone-800">
              <Linkedin size={24} /> LinkedIn
            </a>
            <a href="mailto:jane@example.com" className="flex items-center gap-2 text-stone-600 hover:text-stone-800">
              <Mail size={24} /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;