import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🧩',
      title: 'Individual ABA Therapy',
      description: 'Personalized one-on-one behavioral therapy sessions designed to unlock your child\'s full potential through evidence-based interventions.',
      features: [
        'Comprehensive behavioral assessment',
        'Personalized treatment plans',
        'Real-time progress tracking',
        'Skill development programs',
        'Data-driven interventions'
      ],
      duration: '45-60 minutes',
      frequency: '1-3 times per week',
      color: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'from-blue-500 to-purple-600',
      popular: false,
      stats: '95% Success Rate',
      badge: 'Evidence-Based'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Parent Training & Support',
      description: 'Empower yourself with proven strategies and practical tools to create lasting positive changes at home.',
      features: [
        'Behavior management techniques',
        'Effective communication strategies',
        'Home environment optimization',
        'Crisis intervention methods',
        '24/7 support resources'
      ],
      duration: '60-90 minutes',
      frequency: 'Bi-weekly sessions',
      color: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'from-purple-500 to-pink-600',
      popular: true,
      stats: '150+ Families Helped',
      badge: 'Most Popular'
    },
    {
      icon: '🏫',
      title: 'School Collaboration',
      description: 'Seamless coordination with educational teams to ensure consistent, comprehensive support across all learning environments.',
      features: [
        'IEP/504 plan consultation',
        'Teacher training sessions',
        'Classroom observation & analysis',
        'Academic support strategies',
        'Progress coordination'
      ],
      duration: 'Variable',
      frequency: 'As needed',
      color: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      iconBg: 'from-green-500 to-teal-600',
      popular: false,
      stats: '100% School Success',
      badge: 'Collaborative'
    },
    {
      icon: '👥',
      title: 'Group Social Skills',
      description: 'Dynamic small group sessions focused on developing essential social interaction and communication skills in a supportive peer environment.',
      features: [
        'Peer interaction practice',
        'Social communication skills',
        'Group dynamics training',
        'Friendship building strategies',
        'Confidence building activities'
      ],
      duration: '60 minutes',
      frequency: 'Weekly sessions',
      color: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      iconBg: 'from-orange-500 to-red-600',
      popular: false,
      stats: '8-10 Kids Per Group',
      badge: 'Interactive'
    },
    {
      icon: '📊',
      title: 'Behavioral Assessment',
      description: 'Comprehensive, scientifically-based evaluation to understand your child\'s unique behavioral patterns, strengths, and development needs.',
      features: [
        'Detailed behavioral analysis',
        'Standardized assessment tools',
        'Environmental observation',
        'Comprehensive reporting',
        'Treatment recommendations'
      ],
      duration: '2-3 hours',
      frequency: 'Initial & periodic',
      color: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      iconBg: 'from-teal-500 to-cyan-600',
      popular: false,
      stats: 'Detailed Analysis',
      badge: 'Comprehensive'
    },
    {
      icon: '🚨',
      title: 'Crisis Intervention',
      description: 'Immediate, professional support and evidence-based strategies for managing behavioral crises and emergency situations with confidence.',
      features: [
        '24/7 crisis support hotline',
        'Emergency intervention plans',
        'De-escalation techniques',
        'Safety protocols & procedures',
        'Follow-up support'
      ],
      duration: 'As needed',
      frequency: 'Emergency basis',
      color: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50',
      iconBg: 'from-red-500 to-pink-600',
      popular: false,
      stats: '24/7 Available',
      badge: 'Emergency'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Comprehensive <span className="title-highlight">Therapy Services</span>
          </h2>
          <p className="section-subtitle">
            Evidence-based interventions designed to help your child thrive and reach their full potential
          </p>
        </motion.div>
        
        <motion.div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Card Header with Badge */}
              <div className="card-header">
                {service.popular && (
                  <div className="popular-badge">
                    <span className="badge-icon">⭐</span>
                    {service.badge}
                  </div>
                )}
                {!service.popular && (
                  <div className="service-badge">
                    {service.badge}
                  </div>
                )}
              </div>
              
              {/* Service Icon with Gradient Background */}
              <div className="service-icon-wrapper">
                <div className={`service-icon bg-gradient-to-br ${service.iconBg}`}>
                  <span>{service.icon}</span>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                {/* Stats Display */}
                <div className="service-stats">
                  <div className="stat-item">
                    <span className="stat-icon">📊</span>
                    <span className="stat-value">{service.stats}</span>
                  </div>
                </div>
                
                {/* Service Features */}
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="feature-icon">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Service Meta Information */}
                <div className="service-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <div className="meta-content">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{service.duration}</span>
                    </div>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <div className="meta-content">
                      <span className="meta-label">Frequency</span>
                      <span className="meta-value">{service.frequency}</span>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action Button */}
                <motion.button 
                  className="service-cta"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="cta-icon">🚀</span>
                  Get Started Today
                  <div className="cta-shine"></div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default Services;