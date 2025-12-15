'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const stats = [
    { value: '200+', label: 'Projects Delivered' },
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Countries Served' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  const missions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation First',
      desc: 'We push boundaries with cutting-edge technologies to deliver solutions that set you apart from the competition.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Client Partnership',
      desc: 'Your success is our success. We work as an extension of your team, fully invested in achieving your goals.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Obsessed',
      desc: 'Every line of code, every pixel, every interaction is crafted with precision and attention to detail.'
    }
  ];

  return (
    <section id="about" className="section-dark py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* About Us Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            About Us
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            We Are <span className="text-gradient">Projectory Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A team of passionate engineers, designers, and strategists dedicated to transforming 
            ambitious ideas into exceptional digital products that drive real business impact.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          variants={itemVariants}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 text-center group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-blue-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Mission */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              To empower businesses with technology that scales, innovates, and delivers measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missions.map((mission, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 relative group overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient line at top */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0 }}
                />
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                  {mission.icon}
                </div>
                
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {mission.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {mission.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative line connector */}
        <motion.div 
          className="flex justify-center mt-20"
          variants={itemVariants}
        >
          <div className="w-px h-24 bg-gradient-to-b from-blue-500/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

const services = [
  { 
    title: 'App Development', 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    desc: 'Native iOS, Android, and cross-platform apps built with React Native and Flutter',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'AI & Machine Learning', 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    desc: 'Custom AI models, NLP, computer vision, and intelligent automation solutions',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Web Development', 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    desc: 'Blazing-fast web apps with Next.js, React, and modern cloud infrastructure',
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'API & Backend', 
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    desc: 'Scalable APIs, microservices, and serverless architectures on AWS and Azure',
    gradient: 'from-orange-500 to-amber-500'
  }
];

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="services" className="section-dark py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={headerVariants}>
          <motion.span 
            className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            What We Offer
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end technology solutions designed to scale your business
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Animated top border */}
              <motion.div 
                className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${service.gradient}`}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}
              <motion.div 
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                {service.desc}
              </p>

              {/* Learn more with arrow */}
              <motion.div 
                className="flex items-center text-blue-400 text-sm font-medium"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                <span>Learn more</span>
                <motion.svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">Projectory Solutions</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-[9px] transition-all hover:shadow-lg hover:shadow-blue-500/50">
            Get Started
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-float"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '3s', transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-rotate-3d" style={{ transformStyle: 'preserve-3d' }} />
            <div className="absolute inset-8 border border-blue-500/30 rounded-full animate-rotate-3d" style={{ animationDuration: '15s', animationDirection: 'reverse', transformStyle: 'preserve-3d' }} />
            <div className="absolute inset-16 border border-blue-500/40 rounded-full animate-rotate-3d" style={{ animationDuration: '10s', transformStyle: 'preserve-3d' }} />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Where Your Next Big Idea Finds its 
            <span className="text-gradient block">Blueprint.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your ideas into powerful digital products with AI, cloud, and cutting-edge development
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-4 py-2 bg-blue-600 rounded-[8px] font-semibold text-sm hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105">
              Start Your Project
            </button>
            <button className="px-4 py-2 glass-card1 rounded-[8px] font-semibold text-sm hover-lift">
              View Our Work
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Us & Mission Section */}
      <AboutSection />

      <ServicesSection />

      <section id="process" className="section-dark py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your vision, goals, and technical requirements' },
              { step: '02', title: 'Design', desc: 'User-centered design with prototypes and iterative feedback' },
              { step: '03', title: 'Build', desc: 'Agile development with bi-weekly sprints and continuous delivery' },
              { step: '04', title: 'Launch', desc: 'Deployment, monitoring, and ongoing optimization and support' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="glass-card p-8 hover-lift">
                  <div className="text-6xl font-bold text-white-500/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-dark py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by startups and enterprises worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'CEO',
                company: 'FinFlow Inc',
                text: 'TechForge transformed our vision into a production-ready platform in just 12 weeks. Their technical expertise and attention to detail are unmatched.',
                rating: 5
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CTO',
                company: 'HealthTech Solutions',
                text: 'The AI model they built exceeded our accuracy requirements by 15%. Professional, responsive, and highly skilled team.',
                rating: 5
              },
              {
                name: 'Emily Watson',
                role: 'Founder',
                company: 'ShopSmart',
                text: 'Our conversion rate increased by 40% after the platform redesign. They truly understand both technology and business outcomes.',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="glass-card p-8 hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-light py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Building Excellence Since 2018
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We&apos;re a team of engineers, designers, and strategists who believe technology should drive real business value.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With 200+ successful projects delivered, our focus is on quality, scalability, and measurable outcomes.
              </p>
              <div className="grid grid-cols-3 gap-8 ">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card-light p-12 relative z-10">
                <div className="space-y-6">
                  {['Full-Stack Development', 'Cloud Architecture', 'AI/ML Engineering', 'DevOps & Security', 'Product Strategy', 'UX/UI Design'].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-900">{skill}</span>
                        <span className="text-blue-600">Expert</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-600/20 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-dark py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Let&apos;s Build Together</h2>
            <p className="text-xl text-gray-300">
              Ready to transform your idea into reality? Get in touch.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 transition-all"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-gradient mb-4">TechForge</div>
              <p className="text-gray-400">Building the future of technology, one project at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>App Development</li>
                <li>AI & ML</li>
                <li>Web Development</li>
                <li>API Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>GitHub</li>
                <li>Dribbble</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechForge Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
