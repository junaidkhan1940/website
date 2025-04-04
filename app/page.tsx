// app/page.tsx - Main Landing Page
"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Linkedin, 
  Mail, 
  Github,
  Phone,
  FileText,
  Code,
  Lightbulb,
  PenTool,
  CheckCircle,
  Layers
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectCard from '@/components/project-card';
import ServiceCard from '@/components/service-card';
import TestimonialCard from '@/components/testimonial-card';
import ContactForm from '@/components/contact-form';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute('id') || 'home';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <PenTool size={24} />,
      title: "CAD Design & Modeling",
      description: "Expert 3D modeling and design services using SolidWorks, creating detailed mechanical components and assemblies.",
    },
    {
      icon: <Layers size={24} />,
      title: "Technical Engineering",
      description: "Specialized engineering solutions for CNC Plasma and Water Jet machines, ensuring precision cutting and high-quality outputs.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Sustainable Engineering",
      description: "Development of eco-friendly solutions and renewable energy systems, from solar-powered devices to energy-efficient designs.",
    },
    {
      icon: <Code size={24} />,
      title: "Engineering Simulation",
      description: "Detailed analysis and simulation of mechanical components to validate designs before manufacturing.",
    },
  ];

  const projects = [
    {
      title: "Solar Electric Hybrid Car",
      description: "Designed and built a sustainable transportation solution powered by both solar and electric energy. Created detailed CAD models using Fusion 360 and SolidWorks.",
      tags: ["SolidWorks", "Fusion 360", "Sustainable Design"],
      image: "/images/solar-car.jpg"
    },
    {
      title: "Ergonomic Office Chair Design",
      description: "Custom-designed office chair using SolidWorks, tailored to specific ergonomic standards and preferences with precise measurements for optimal user experience.",
      tags: ["SolidWorks", "Ergonomics", "Product Design"],
      image: "/images/office-chair.jpg"
    },
    {
      title: "Eco-Friendly House with Integrated Systems",
      description: "Designed a sustainable house with solar air heating, water heating, and desalination systems. Created detailed assembly drawings in SolidWorks before construction.",
      tags: ["SolidWorks", "Sustainable Design", "Renewable Energy"],
      image: "/images/eco-house.jpg"
    },
    {
      title: "Solar Parabola Micro Power Plant",
      description: "Designed and built a closed-loop system using a solar parabola to generate steam and power a turbine for electricity production.",
      tags: ["SolidWorks", "Renewable Energy", "Power Generation"],
      image: "/images/solar-parabola.jpg"
    }
  ];

  const testimonials = [
    {
      quote: "Junaid's attention to detail and technical expertise in SolidWorks design made our project a success. His ability to translate concepts into precise 3D models exceeded our expectations.",
      author: "Dr. Ahmed Hassan",
      role: "Professor, Cyprus International University"
    },
    {
      quote: "Working with Junaid on our sustainable engineering project was a pleasure. His innovative approach and deep knowledge of mechanical systems helped us create an efficient and eco-friendly solution.",
      author: "Sarah Chen",
      role: "Project Lead, Renewable Energy Initiative"
    },
    {
      quote: "The technical drawings and 3D models Junaid created for our manufacturing process significantly improved our production efficiency. His work is precise, professional, and delivered on time.",
      author: "Michael Rodriguez",
      role: "Operations Manager, Manufacturing Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Head>
        <title>Junaid Khan | Mechanical Engineer & SolidWorks Specialist</title>
        <meta name="description" content="Professional portfolio of Junaid Khan, Mechanical Engineer and SolidWorks specialist offering CAD design, technical engineering, and sustainable solutions." />
      </Head>

      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="relative pt-20 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
                  Junaid Khan
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Mechanical Engineer & SolidWorks Specialist
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl">
                Transforming ideas into reality with precision engineering and innovative design solutions. Specializing in SolidWorks design, technical engineering, and sustainable solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-all flex items-center gap-2">
                  Get in Touch <ArrowRight size={18} />
                </a>
                <a href="#projects" className="px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all">
                  View Projects
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-100 to-teal-50 dark:from-blue-800/30 dark:to-teal-800/30 rounded-full overflow-hidden shadow-xl">
                <div className="absolute inset-4 rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Junaid Khan" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x400.png?text=Junaid+Khan';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown size={24} className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-semibold mb-4">Mechanical Engineer & CAD Specialist</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm Junaid Khan, a mechanical engineer with expertise in SolidWorks design and technical engineering. With a B.Sc. in Mechanical Engineering from Cyprus International University, I specialize in precision engineering, CAD/CAM solutions, and sustainable design.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Currently working as a Technical Engineer at Öz-İş Torno, I operate CNC Plasma and CNC Water Jet machines, design components with AutoCAD and SolidWorks, and implement efficient manufacturing solutions. My experience also includes roles as a Teaching Assistant at Cyprus International University and internships at Pak Elektron Limited.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                I'm passionate about creating innovative, sustainable engineering solutions and have worked on projects ranging from solar-powered vehicles to renewable energy systems. My goal is to combine technical expertise with creative problem-solving to deliver exceptional results for clients.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">SolidWorks</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">AutoCAD</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Fusion 360</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">CNC Machining</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">CAD/CAM</span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Sustainable Design</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 p-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="/images/engineer-working.jpg" 
                    alt="Junaid Khan working on mechanical design" 
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/600x400.png?text=Engineering+In+Action';
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-10 text-center"
            >
              Professional Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <TimelineItem 
                  date="February 2024 - Present"
                  title="Technical Engineer"
                  company="Öz-İş Torno, Nicosia"
                  description="Operating CNC Plasma and CNC Water Jet machines, designing with CAD/CAM software, troubleshooting machinery issues, and implementing manufacturing process improvements."
                  index={0}
                />
                
                <TimelineItem 
                  date="March 2022 - January 2024"
                  title="Teaching Assistant"
                  company="Cyprus International University"
                  description="Supporting instructors in delivering education, conducting lab sessions, providing one-on-one assistance to students, and assisting professors with research work."
                  index={1}
                  right={true}
                />
                
                <TimelineItem 
                  date="January 2022 - March 2022"
                  title="Trainee Engineer"
                  company="Cyprus International University, Nicosia"
                  description="Gained experience in control systems and instrumentation, working with engineers to learn technical aspects of equipment, and interpreting technical drawings."
                  index={2}
                />
                
                <TimelineItem 
                  date="August 2022 - September 2023"
                  title="Intern"
                  company="Pak Elektron Limited, Lahore"
                  description="Focused on the deep freezer division, gained hands-on experience in manufacturing processes, and exposure to various departments including refrigeration and washing machine production."
                  index={3}
                  right={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Specialized engineering solutions tailored to your needs. From precision CAD design to sustainable engineering innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-md transition-all">
              Request Custom Service <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              A showcase of my engineering work, combining technical expertise with innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all">
              Discuss Your Project <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              What clients and collaborators say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Have a project in mind or want to discuss how I can help with your engineering needs? Reach out to me!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:mechengrjunaidkhan@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      mechengrjunaidkhan@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+923350304533" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +92 335 030 4533
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/junaidkhan" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      linkedin.com/in/junaidkhan
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium mb-3">Services Available Worldwide</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    I provide remote design and engineering services to clients around the world. Local consultations available in Pakistan and Cyprus.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  index: number;
  right?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, company, description, index, right = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex md:items-center ${right ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* Content */}
      <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)] 
        flex-grow md:flex-grow-0
        ${right ? 'md:pl-8 md:text-right' : 'md:pr-8'}">
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
          <span className="inline-block px-3 py-1 rounded-full text-sm 
            bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
            {date}
          </span>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <h4 className="text-gray-600 dark:text-gray-400 mb-3">{company}</h4>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>

      {/* Timeline Node - Mobile */}
      <div className="absolute left-0 top-1 md:hidden
        w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30
        border-2 border-blue-600 dark:border-blue-400
        flex items-center justify-center z-10">
        <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
      </div>

      {/* Timeline Node - Desktop */}
      <div className="hidden md:flex absolute left-1/2 top-1/2
        transform -translate-x-1/2 -translate-y-1/2
        w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30
        border-2 border-blue-600 dark:border-blue-400
        items-center justify-center z-10">
        <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
      </div>
    </motion.div>
  );
};