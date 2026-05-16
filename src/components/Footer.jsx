import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com/lokeshprajapat', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: FiLinkedin, link: 'https://linkedin.com/in/lokeshprajapat', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FiTwitter, link: 'https://twitter.com/lokeshprajapat', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: FiInstagram, link: 'https://instagram.com/lokeshprajapat', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FiMail, link: 'mailto:prajapatlokesh08112003@gmail.com', label: 'Email', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Back to Top Button - Fixed Positioning */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ y: -8, scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 inline-block"
            >
              Lokesh Prajapat
            </motion.h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
              Frontend Developer creating amazing web experiences with React and modern technologies.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.15 }}
                  className={`p-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-sm hover:shadow-md`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 relative inline-block">
              Quick Links
              <motion.div 
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 relative inline-block">
              Contact Info
              <motion.div 
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </h4>
            <ul className="space-y-3 text-sm">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400"
              >
                <span className="text-xl">📍</span>
                <span>Jaipur, Rajasthan, India</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 }}
              >
                <a 
                  href="mailto:prajapatlokesh08112003@gmail.com" 
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-xl">📧</span>
                  <span>prajapatlokesh08112003@gmail.com</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="tel:+919214510791" 
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-xl">📞</span>
                  <span>+91 92145 10791</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Lokesh Prajapat. All rights reserved.
          </p>
          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="text-gray-400 dark:text-gray-500 text-xs mt-2 flex items-center justify-center gap-1"
          >
            Built with 
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <FiHeart className="w-3 h-3 text-red-500" />
            </motion.div> 
            using React & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;