import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiMail, 
  FiMapPin, 
  FiSend, 
  FiGithub, 
  FiLinkedin,
  FiMessageCircle,
  FiCheckCircle
} from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      alert('✅ Message sent successfully! I will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Jaipur, Rajasthan, India',
      details: 'Available for remote work worldwide',
      color: 'from-blue-500 to-cyan-500',
      link: null,
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'prajapatlokesh08112003@gmail.com',
      details: 'Click to open Gmail',
      color: 'from-purple-500 to-pink-500',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=prajapatlokesh08112003@gmail.com',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: FiMessageCircle,
      title: 'WhatsApp',
      value: 'Click to chat on WhatsApp',
      details: 'Quick response on WhatsApp',
      color: 'from-green-600 to-teal-500',
      link: 'https://wa.me/919214510791',
      gradient: 'from-green-600/10 to-teal-500/10'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com/daksh-prajapat', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white', bg: 'hover:bg-gray-100 dark:hover:bg-gray-800' },
    { icon: FiLinkedin, link: 'https://www.linkedin.com/in/lokesh-prajapat-354352312', label: 'LinkedIn', color: 'hover:text-blue-600', bg: 'hover:bg-blue-50 dark:hover:bg-blue-950/30' },
    { icon: FiMail, link: 'https://mail.google.com/mail/?view=cm&fs=1&to=prajapatlokesh08112003@gmail.com', label: 'Gmail', color: 'hover:text-red-500', bg: 'hover:bg-red-50 dark:hover:bg-red-950/30' }
  ];

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden scroll-mt-16 lg:scroll-mt-20 bg-white dark:bg-gray-950">
      
      {/* Consistent Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 -z-20" />
      
      {/* Animated Background Orbs */}
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

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

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
              📬 Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear from you. Let's create something amazing!
          </p>
        </motion.div>

        {/* Grid - Mobile me center, Desktop me left-right */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Contact Info Cards - Mobile Center */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col items-center lg:items-start w-full"
          >
            <div className="w-full max-w-md lg:max-w-none space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.link || '#'}
                  target={info.link && info.link.includes('mail.google.com') ? '_blank' : info.link && info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`block ${!info.link ? 'cursor-default' : 'cursor-pointer'} w-full`}
                >
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 overflow-hidden"
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                    />
                    
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500`} />
                    
                    <div className="relative z-10 flex items-center justify-center lg:justify-start gap-4">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{info.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 font-medium break-all">{info.value}</p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">{info.details}</p>
                      </div>
                      {info.link && (
                        <motion.div 
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            <FiSend className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-all duration-300" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.a>
              ))}

              {/* Social Links Section */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 text-center lg:text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -8, scale: 1.15 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 ${social.color} ${social.bg}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form - Mobile Center */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            className="flex justify-center lg:block w-full"
          >
            <div className="w-full max-w-md lg:max-w-none bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Send Me a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30'
                  } text-white`}
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <FiCheckCircle className="w-4 h-4 text-green-500" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;