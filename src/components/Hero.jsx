import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiChevronDown, FiEye } from 'react-icons/fi';
import { SiReact, SiJavascript, SiTailwindcss, SiHtml5 } from 'react-icons/si';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com/lokeshprajapat', color: 'hover:text-gray-900 dark:hover:text-white', bg: 'hover:bg-gray-100 dark:hover:bg-gray-800' },
    { icon: FiLinkedin, link: 'https://linkedin.com/in/lokeshprajapat', color: 'hover:text-blue-600', bg: 'hover:bg-blue-50 dark:hover:bg-blue-950/30' },
    { icon: FiTwitter, link: 'https://twitter.com/lokeshprajapat', color: 'hover:text-sky-500', bg: 'hover:bg-sky-50 dark:hover:bg-sky-950/30' },
    { icon: FiMail, link: 'mailto:prajapatlokesh08112003@gmail.com', color: 'hover:text-red-500', bg: 'hover:bg-red-50 dark:hover:bg-red-950/30' },
  ];

  const floatingIcons = [
    { Icon: SiReact, color: 'text-blue-500', delay: 0, x: '10%', y: '20%' },
    { Icon: SiJavascript, color: 'text-yellow-500', delay: 1, x: '85%', y: '15%' },
    { Icon: SiTailwindcss, color: 'text-teal-500', delay: 2, x: '15%', y: '70%' },
    { Icon: SiHtml5, color: 'text-orange-500', delay: 1.5, x: '80%', y: '75%' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-24 scroll-mt-16 lg:scroll-mt-20 bg-white dark:bg-gray-950"
    >

      {/* Consistent Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 -z-20" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 dark:opacity-10 animate-pulse animation-delay-4000" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          initial={{ x: item.x, y: item.y, opacity: 0 }}
          animate={{
            y: [item.y, `calc(${item.y} - 30px)`, item.y],
            opacity: [0, 0.5, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ left: item.x, top: item.y }}
        >
          <item.Icon className={`w-12 h-12 ${item.color} opacity-20 dark:opacity-30`} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            style={{ y, opacity }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Open for opportunities
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 tracking-tight"
            >
              <span className="text-gray-800 dark:text-gray-200">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lokesh Prajapat
              </span>
            </motion.h1>

            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4 lg:mb-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm lg:text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-4 lg:mb-6 leading-relaxed"
            >
              I specialize in building exceptional digital experiences with React and modern frontend technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm lg:text-base text-gray-500 dark:text-gray-500 mb-6 lg:mb-8 leading-relaxed"
            >
              Creating responsive, accessible, and performant web applications that users love to interact with.
            </motion.p>

            {/* CTA Buttons with Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-3 lg:gap-4 mb-8 lg:mb-10"
            >
              {/* Hire Me Button */}
              <motion.button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 lg:px-8 py-2.5 lg:py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm lg:text-base overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10">Hire Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Resume Dropdown Button */}
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 lg:px-8 py-2.5 lg:py-3.5 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm lg:text-base hover:border-blue-600 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  <FiDownload size={16} />
                  Resume
                  <svg 
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                  <a
                    href="https://drive.google.com/file/d/1PlRirP6dHZhLih_Orgx9oZOpbvhmpupA/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl transition-all duration-200 hover:pl-5"
                  >
                    <FiEye size={14} />
                    View Resume
                  </a>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1PlRirP6dHZhLih_Orgx9oZOpbvhmpupA"
                    download
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-xl transition-all duration-200 hover:pl-5"
                  >
                    <FiDownload size={14} />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6"
            >
              <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-500 font-medium">Follow me on</span>
              <div className="flex gap-2 lg:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`p-2 lg:p-3 bg-white dark:bg-gray-900 rounded-xl lg:rounded-2xl shadow-md ${social.bg} transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={16} className="lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Professional Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative z-10 mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
              {/* Animated Glow Effect */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-60"
              />

              {/* Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-1 backdrop-blur-sm">
                <img
                  src="/images/profile.jpg"
                  alt="Lokesh Prajapat"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-white/30 dark:border-gray-800/30"
                />

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute -left-3 lg:-left-5 -top-3 bg-white dark:bg-gray-900 rounded-2xl p-2 lg:p-3 shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-[10px] text-gray-500">Months</div>
                  <div className="text-[10px] text-gray-500 font-semibold">Exp</div>
                </div>
              </motion.div>

              {/* Projects Badge */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -right-3 lg:-right-5 -bottom-3 bg-white dark:bg-gray-900 rounded-2xl p-2 lg:p-3 shadow-xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-[10px] text-gray-500">Projects</div>
                  <div className="text-[10px] text-gray-500 font-semibold">Done</div>
                </div>
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 rounded-full px-3 py-1.5 shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-1.5"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-400">5.0 Rating</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1 lg:gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-[10px] lg:text-xs font-medium">Scroll Down</span>
            <FiChevronDown size={16} className="lg:w-5 lg:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;