import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiEye, FiCode } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredId, setHoveredId] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with cart, wishlist, and payment integration.",
      longDescription: "Built a complete e-commerce solution with user authentication, product filtering, search functionality, shopping cart, and secure payment gateway integration.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      features: ["User Authentication", "Shopping Cart", "Payment Gateway", "Order Tracking"],
      liveLink: "#",
      codeLink: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Weather Forecast App",
      description: "Real-time weather application with 5-day forecast and location detection.",
      longDescription: "Weather app that provides current weather conditions, 5-day forecast, and automatic location detection using browser geolocation.",
      tech: ["React", "OpenWeather API", "Axios", "Chart.js"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      features: ["Real-time Weather", "5-day Forecast", "Location Detection", "Temperature Units"],
      liveLink: "#",
      codeLink: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Productivity app for managing tasks, projects, and team collaboration.",
      longDescription: "A comprehensive task management tool with drag-and-drop functionality, task categories, due dates, and team collaboration features.",
      tech: ["React", "Context API", "LocalStorage", "Tailwind", "React DnD"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      features: ["Drag & Drop", "Task Categories", "Due Dates", "Search & Filter"],
      liveLink: "#",
      codeLink: "#",
      category: "frontend"
    },
    {
      id: 4,
      title: "AI Image Generator",
      description: "Generate stunning images using AI with OpenAI DALL-E API.",
      longDescription: "An AI-powered image generation tool that creates unique images from text descriptions using OpenAI's DALL-E API.",
      tech: ["React", "OpenAI API", "Node.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
      features: ["Text to Image", "Multiple Styles", "Download Images", "Gallery"],
      liveLink: "#",
      codeLink: "#",
      category: "fullstack"
    }
  ];

  const categories = ["All", "Frontend", "Fullstack"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory.toLowerCase());

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden scroll-mt-16 lg:scroll-mt-20 bg-white dark:bg-gray-950">
      
      {/* Consistent Background - Same as Hero/About/Skills/Education */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 -z-20" />
      
      {/* Animated Background Orbs - Same as Other Sections */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, -40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-20"
        />
      </div>

      {/* Subtle Dot Pattern - Same as Others */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Same Style */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
              🚀 My Work
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of my best works. Each project is built with passion and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              variants={cardVariants}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden h-64 lg:h-72">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={hoveredId === project.id ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quick View Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition"
                  >
                    <FiEye className="w-5 h-5 text-gray-800" />
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition"
                  >
                    <FiCode className="w-5 h-5 text-gray-800" />
                  </motion.a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                    project.category === 'fullstack'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  }`}>
                    {project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <motion.h3 
                  className="text-xl lg:text-2xl font-bold mb-2 text-gray-800 dark:text-white"
                  animate={hoveredId === project.id ? { x: 5 } : { x: 0 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400">
                      +{project.features.length - 3}
                    </span>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 text-blue-700 dark:text-blue-400 rounded-lg font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline transition"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-800 dark:hover:text-gray-200 transition"
                  >
                    <FiGithub size={16} />
                    Source Code
                  </motion.a>
                </div>
              </div>

              {/* Animated Border on Hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                animate={hoveredId === project.id ? {
                  borderColor: ['rgba(59,130,246,0)', 'rgba(59,130,246,0.4)', 'rgba(59,130,246,0)'],
                } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/lokeshprajapat"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiGithub size={18} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;