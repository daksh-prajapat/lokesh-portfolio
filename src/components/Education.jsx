import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiBook, 
  FiCalendar, 
  FiMapPin, 
  FiAward,
  FiStar,
  FiTrendingUp,
  FiCheckCircle,
  FiClock
} from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University of Technology",
      location: "Jaipur, Rajasthan",
      period: "2022 - 2025",
      description: "Currently in 3rd year, pursuing Bachelor's degree in Computer Applications. Will complete in 2025.",
      achievements: ["3rd Year Student", "Learning Full Stack Development", "Active in coding"],
      icon: FiBook,
      color: "from-blue-500 to-cyan-500",
      current: true
    },
    {
      id: 2,
      degree: "Senior Secondary Education (12th)",
      institution: "Government School",
      location: "Rajasthan",
      period: "2019 - 2020",
      description: "Completed 12th with Science Mathematics stream from Government School.",
      achievements: ["70% Aggregate", "Science & Maths Stream", "Government School"],
      icon: FiTrendingUp,
      color: "from-purple-500 to-pink-500",
      percentage: "70%"
    },
    {
      id: 3,
      degree: "Secondary Education (10th)",
      institution: "Government School",
      location: "Rajasthan",
      period: "2018 - 2019",
      description: "Completed 10th from Government School with excellent academic record.",
      achievements: ["76% Aggregate", "First Division", "Government School Topper"],
      icon: FiStar,
      color: "from-green-500 to-emerald-500",
      percentage: "76%"
    }
  ];

  const certificates = [
    { name: "MERN Stack Development", issuer: "Offline Course", year: "2025", icon: FiAward },
    { name: "React - Frontend Development", issuer: "Course Certification", year: "2025", icon: FiAward },
    { name: "JavaScript Essentials", issuer: "Offline Course", year: "2025", icon: FiAward },
    { name: "Tailwind CSS Mastery", issuer: "Course Certification", year: "2025", icon: FiAward }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
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

  const certVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="education" className="relative py-20 lg:py-28 overflow-hidden scroll-mt-16 lg:scroll-mt-20 bg-white dark:bg-gray-950">
      
      {/* Consistent Background - Same as Hero/About/Skills */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 -z-20" />
      
      {/* Animated Background Orbs - Same as Skills */}
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

      {/* Subtle Dot Pattern - Same as Hero */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Same Style as Others */}
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
              🎓 My Education
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            My academic background from Government School to University
          </p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`} />
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800">
                
                {edu.current && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1"
                    >
                      <FiClock className="w-3 h-3" />
                      Current
                    </motion.div>
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${edu.color} group-hover:h-3 transition-all duration-300`} />
                
                <div className="p-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block p-3 rounded-xl bg-gradient-to-r ${edu.color} mb-4 shadow-lg`}
                  >
                    <edu.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  {edu.percentage && (
                    <motion.div 
                      initial={{ scale: 0, x: -20 }}
                      animate={inView ? { scale: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + 0.2 }}
                      className="inline-block ml-3 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                    >
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {edu.percentage}
                      </span>
                    </motion.div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <FiMapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}, {edu.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <FiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + idx * 0.05 + 0.3 }}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 flex items-center gap-1"
                      >
                        <FiCheckCircle className="w-3 h-3 text-green-500" />
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="inline-block mb-3"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
                <FiAward className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
            </motion.div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Professional Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Courses and certifications I've completed to enhance my skills
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={certVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-500" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center"
                  >
                    <cert.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1 text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -5 }}
          className="mt-16 p-6 lg:p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl text-center border border-blue-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700 dark:text-gray-300 text-base lg:text-lg">
            <span className="text-2xl">🎯</span>
            <span className="font-semibold text-gray-800 dark:text-white">Lokesh Prajapat</span>
            <span>— Currently in</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">3rd year BCA</span>
            <span>at</span>
            <span className="font-semibold">University of Technology, Jaipur</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-gray-600 dark:text-gray-400 text-sm">
            <span>Completed schooling from Government School with</span>
            <span className="font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">76% (10th)</span>
            <span>and</span>
            <span className="font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded">70% (12th)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;