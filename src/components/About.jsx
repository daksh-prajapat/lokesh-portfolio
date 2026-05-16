import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiUsers, FiCode, FiBookOpen, FiCalendar, FiHeart, FiGlobe } from 'react-icons/fi';
import { SiReact, SiJavascript, SiTailwindcss } from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const stats = [
    { icon: FiCode, value: '10+', label: 'Projects Completed', color: 'from-blue-500 to-blue-600' },
    { icon: FiUsers, value: '2+', label: 'Happy Clients', color: 'from-purple-500 to-purple-600' },
    { icon: FiAward, value: '2', label: 'Certifications', color: 'from-pink-500 to-pink-600' },
    { icon: FiBookOpen, value: '1000+', label: 'Hours of Code', color: 'from-indigo-500 to-indigo-600' },
  ];

  const personalInfo = [
    { icon: FiCalendar, label: 'Experience', value: '10+ Months' },
    { icon: FiGlobe, label: 'Available For', value: 'Remote Work' },
    { icon: FiHeart, label: 'Passion', value: 'Web Development' },
  ];

  const achievements = [
    { year: '2025', title: 'MERN Stack Certification', company: 'Offline Course' },
    { year: '2025', title: 'Frontend Developer', company: 'Freelance' },
    { year: '2024', title: 'Started Coding Journey', company: 'Self-taught' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden scroll-mt-16 lg:scroll-mt-20 bg-white dark:bg-gray-950">
      
      {/* Consistent Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 -z-20" />
      
      {/* Animated Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10 animate-pulse animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              📖 About Me
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Know Who I Am
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Get to know me better — my journey, skills, and passion for web development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Image with Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop"
                  alt="Lokesh Prajapat Coding"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <FiCode className="text-white text-2xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                    <div className="text-xs text-gray-500">Month Experience</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Passion Card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <SiReact className="text-white text-2xl" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">React</div>
                    <div className="text-xs text-gray-500">Expert Level</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Lokesh Prajapat
                </span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600" />
                <span className="text-gray-500 dark:text-gray-400">Frontend Developer</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            >
              A passionate Frontend Developer from India. I recently completed my MERN stack course 
              and fell in love with creating beautiful, responsive web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            >
              My journey in web development started with curiosity about how websites work, 
              and now I build them professionally. I specialize in React and modern frontend technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            >
              I believe in writing clean, maintainable code and creating user experiences that leave 
              a lasting impression. When I'm not coding, I love to explore new technologies.
            </motion.p>

            {/* Personal Info Grid - 3 items now */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${stat.color} p-4 rounded-xl shadow-lg text-white`}
                >
                  <stat.icon className="w-8 h-8 mb-2 opacity-90" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Tech Stack:</span>
                <div className="flex gap-2">
                  <SiReact className="w-5 h-5 text-blue-500" />
                  <SiJavascript className="w-5 h-5 text-yellow-500" />
                  <SiTailwindcss className="w-5 h-5 text-teal-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400">Milestones along the way</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">{achievement.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{achievement.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;