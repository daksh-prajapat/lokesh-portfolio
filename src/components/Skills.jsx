import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiNodedotjs, 
  SiMongodb, 
  SiGit,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiRedux
} from 'react-icons/si';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiCode, 
  FiServer, 
  FiDatabase,
  FiTool,
  FiBox
} from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const sliderRef = useRef(null);

  const skills = [
    { name: 'React', icon: SiReact, color: 'text-blue-500', level: 85, description: 'Frontend Library', years: '10+ months' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', level: 80, description: 'Programming Language', years: '12+ months' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500', level: 90, description: 'CSS Framework', years: '11+ months' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500', level: 95, description: 'Markup Language', years: '1+ years' },
    { name: 'CSS3', icon: FiBox, color: 'text-blue-600', level: 85, description: 'Styling Language', years: '1+ years' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', level: 70, description: 'Backend Runtime', years: '10+ months' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', level: 65, description: 'NoSQL Database', years: '8+ months' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600', level: 80, description: 'Version Control', years: '1+ years' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white', level: 65, description: 'React Framework', years: '10+ months' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-600', level: 70, description: 'State Management', years: '10+ months' },
  ];

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const startIndex = currentIndex * itemsPerPage;
  const visibleSkills = skills.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (totalPages <= 1) return;
    
    let interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 3000); // 3 seconds me auto slide
    
    const sliderElement = sliderRef.current;
    
    const pauseSlide = () => {
      clearInterval(interval);
    };
    
    const resumeSlide = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }, 3000);
    };
    
    sliderElement?.addEventListener('mouseenter', pauseSlide);
    sliderElement?.addEventListener('mouseleave', resumeSlide);
    
    return () => {
      clearInterval(interval);
      sliderElement?.removeEventListener('mouseenter', pauseSlide);
      sliderElement?.removeEventListener('mouseleave', resumeSlide);
    };
  }, [totalPages]);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const SkillCard = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -10, scale: 1.02 }}
        className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ padding: '2px', margin: '-2px' }}
        />
        
        <div className="relative z-10">
          <motion.div
            animate={{ 
              rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <skill.icon className={`w-14 h-14 ${skill.color} drop-shadow-lg`} />
          </motion.div>

          <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white">
            {skill.name}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {skill.description}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-600 dark:text-blue-400 font-medium">
              {skill.years}
            </span>
          </div>

          <div className="relative pt-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
              <motion.span 
                className="font-semibold text-blue-600 dark:text-blue-400"
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200 dark:bg-gray-800">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex justify-between text-xs">
              <span className="text-gray-500 dark:text-gray-400">Experience:</span>
              <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.years}</span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-gray-500 dark:text-gray-400">Status:</span>
              <span className="font-semibold text-green-500 dark:text-green-400">Active</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden scroll-mt-16 lg:scroll-mt-20 bg-white dark:bg-gray-950">
      
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 -z-20" />
      
      {/* Animated Floating Orbs */}
      <div className="absolute inset-0 -z-15">
        <motion.div
          animate={{ 
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-20 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-25 dark:opacity-35"
        />
        
        <motion.div
          animate={{ 
            x: [50, -50, 50],
            y: [30, -30, 30],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-25 dark:opacity-35"
        />
        
        <motion.div
          animate={{ 
            y: [-40, 40, -40],
            x: [-20, 20, -20],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-pink-500 rounded-full filter blur-3xl opacity-20 dark:opacity-25"
        />

        <motion.div
          animate={{ 
            x: [-30, 60, -30],
            y: [40, -20, 40],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-20 dark:opacity-30"
        />

        <motion.div
          animate={{ 
            y: [-20, 50, -20],
            x: [20, -30, 20],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-15 dark:opacity-25"
        />
      </div>

      {/* Animated Dot Grid Pattern */}
      <motion.div 
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
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
              💪 My Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Slider Container with ref for hover detection */}
        <div ref={sliderRef} className="relative px-4 sm:px-8">
          
          {/* Previous Button */}
          {totalPages > 1 && (
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-2 lg:p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 group"
            >
              <FiChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </motion.button>
          )}

          {/* Next Button */}
          {totalPages > 1 && (
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-2 lg:p-3 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 group"
            >
              <FiChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </motion.button>
          )}

          {/* Slides */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`grid gap-6`}
              style={{
                gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`
              }}
            >
              {visibleSkills.map((skill, idx) => (
                <SkillCard key={skill.name} skill={skill} index={idx} />
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  whileHover={{ scale: 1.2 }}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-8 h-2 bg-gradient-to-r from-blue-500 to-purple-600'
                      : 'w-2 h-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Technologies', value: '10+', icon: FiCode, color: 'from-blue-500 to-cyan-500' },
            { label: 'Projects Done', value: '10+', icon: FiServer, color: 'from-purple-500 to-pink-500' },
            { label: 'Years Active', value: '2+', icon: FiDatabase, color: 'from-green-500 to-emerald-500' },
            { label: 'Certifications', value: '2', icon: FiTool, color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white text-center shadow-lg`}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-90" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;