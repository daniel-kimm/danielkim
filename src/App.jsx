import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu } from 'lucide-react';
import profilePic from './assets/IMG_4992.jpg'

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
      title: 'Handwritten Digit Interpreter',
      description: 'Coded a neural network using the MNIST training set and validated its performance to produce a model that correctly identified the handwritten digit in test cases 80% of the time.',
      technologies: ['Python', 'PyTorch', 'Matplotlib', 'NumPy'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Spotify Top Songs Analysis',
      description: "Built a web application using Streamlit, Spotipy, and the Spotify Web API to analyze and visualize the features (e.g., acousticness, danceability, energy, valence) of a user's top songs.",
      technologies: ['Python', 'Spotipy', 'Streamlit', 'Spotify Web API'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'This Website',
      description: "Check out the code for the website you're looking at right now!",
      technologies: ['React', 'TailwindCSS', 'Lucide Icons', 'Vercel'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const skills = [
    'Python',
    'React/Next.js',
    'Node.js',
    'Java',
    'HTML/CSS',
    'AWS',
    'JavaScript',
    'Figma',
    'PyTorch',
    'Flask',
    'Racket',
    'Matplotlib',
    'NumPy',
    'Spotipy',
    'Streamlit',
    'Spotify Web API',
    'TailwindCSS',
    'Lucide Icons',
    'Vite'
  ];

  const scrollToSection = (e, elementId) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-stone-100 w-full">
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        #root {
          overflow-x: hidden;
          position: relative;
          width: 100%;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Nav */}
      <nav className="bg-[#727D73] text-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Daniel Kim</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-[#F0F0D7] hover:text-[#D0DDD0] transition">About</a>
              <a href="#projects" className="text-[#F0F0D7] hover:text-[#D0DDD0] transition">Projects</a>
              <a href="#skills" className="text-[#F0F0D7] hover:text-[#D0DDD0] transition">Skills</a>
              <a href="#contact" className="text-[#F0F0D7] hover:text-[#D0DDD0] transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#727D73]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F0F0D7]">
              Hi, I'm Daniel Kim.
            </h1>
            <p className="text-lg md:text-xl text-[#F0F0D7] mb-8 max-w-2xl mx-auto px-4">
              Software Engineer
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <a 
                href="#contact" 
                className="bg-[#AAB99A] text-[#F0F0D7] px-6 py-3 rounded-lg hover:bg-[#D0DDD0] hover:text-[#727D73] transition duration-300"
              >
                Get in touch
              </a>
              <a 
                href="#projects" 
                className="border border-[#F0F0D7] text-[#F0F0D7] px-6 py-3 rounded-lg hover:bg-[#D0DDD0] hover:text-[#727D73] transition duration-300"
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#F0F0D7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in order-2 md:order-1">
              <img 
                src={profilePic}
                alt="Daniel Kim" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
              />
            </div>
            <div className="fade-in order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#727D73] mb-6">About Me</h2>
              <p className="text-[#727D73] mb-4">
              Hey! I'm Daniel, a freshman at Northwestern University studying Computer Science and Art. I'm passionate about blending the technical aspects of software engineering with creativity and artistic design. 
              </p>
              <p className="text-[#727D73] mb-4">
              In the future, I hope to work on projects that combine my skills in software engineering and art, contributing to fields like game development, AI, and interactive media. I’m excited to connect with others who share a passion for innovation and creativity in tech.
              </p>
              <p className="text-[#727D73]">
                In my free time, you can find me making art, playing the guitar, or playing tennis with my family. Feel free to reach out to me!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#D0DDD0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#727D73] mb-12 text-center fade-in">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-[#AAB99A] fade-in">
                <h3 className="text-xl font-bold mb-3 text-[#727D73]">{project.title}</h3>
                <p className="text-[#727D73] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-[#F0F0D7] px-3 py-1 rounded-full text-sm text-[#727D73]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubLink} className="flex items-center gap-1 text-[#727D73] hover:text-[#AAB99A] transition">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.liveLink} className="flex items-center gap-1 text-[#727D73] hover:text-[#AAB99A] transition">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[#727D73] text-[#F0F0D7] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#AAB99A] px-6 py-3 rounded-lg text-[#F0F0D7] fade-in">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#AAB99A]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#727D73] mb-12 text-center fade-in">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 items-center mb-16">
            <a 
              href="https://github.com/daniel-kimm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#727D73] hover:text-[#F0F0D7] transition"
            >
              <Github size={24} /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-kimm/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#727D73] hover:text-[#F0F0D7] transition"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
            <a 
              href="mailto:danielkim2028@u.northwestern.edu" 
              className="flex items-center gap-2 text-[#727D73] hover:text-[#F0F0D7] transition"
            >
              <Mail size={24} /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#AAB99A] py-8 border-t border-[#727D73]/20">
        <div className="max-w-7xl mx-auto px-4 text-center text-[#727D73]">
          © 2024 Daniel Kim. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;