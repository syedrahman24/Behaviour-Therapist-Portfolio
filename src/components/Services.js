import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🧩',
      title: 'Individual Therapy',
      description: 'One-on-one behavioral therapy sessions tailored to your child\'s specific needs and goals.',
      features: [
        'Comprehensive behavioral assessment',
        'Personalized treatment plans',
        'Progress tracking and reporting',
        'Skill development programs'
      ],
      duration: '45-60 minutes',
      frequency: '1-3 times per week'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Parent Training & Support',
      description: 'Empower yourself with effective strategies and tools to support your child at home.',
      features: [
        'Behavior management techniques',
        'Communication strategies',
        'Home environment optimization',
        'Crisis intervention methods'
      ],
      duration: '60-90 minutes',
      frequency: 'Bi-weekly sessions'
    },
    {
      icon: '🏫',
      title: 'School Collaboration',
      description: 'Work with educational teams to ensure consistent support across all environments.',
      features: [
        'IEP/504 plan consultation',
        'Teacher training sessions',
        'Classroom observation',
        'Academic support strategies'
      ],
      duration: 'Variable',
      frequency: 'As needed'
    },
    {
      icon: '👥',
      title: 'Group Social Skills',
      description: 'Help children develop social interactions and communication skills in a supportive group setting.',
      features: [
        'Peer interaction practice',
        'Communication skills training',
        'Emotional regulation',
        'Friendship building'
      ],
      duration: '60 minutes',
      frequency: 'Weekly groups'
    },
    {
      icon: '📊',
      title: 'Behavioral Assessment',
      description: 'Comprehensive evaluation to understand your child\'s strengths, challenges, and needs.',
      features: [
        'Detailed behavioral analysis',
        'Functional assessment',
        'Recommendations report',
        'Treatment planning'
      ],
      duration: '2-3 hours',
      frequency: 'Initial & annual'
    },
    {
      icon: '🎯',
      title: 'Crisis Intervention',
      description: 'Immediate support and strategies for managing behavioral crises and emergencies.',
      features: [
        '24/7 consultation available',
        'Emergency response plans',
        'Safety protocols',
        'Follow-up support'
      ],
      duration: 'As needed',
      frequency: 'Emergency basis'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Comprehensive Therapy Services</h2>
          <p>Evidence-based interventions designed to help your child thrive</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <div className="service-details">
                <div className="detail">
                  <span className="label">Duration:</span>
                  <span className="value">{service.duration}</span>
                </div>
                <div className="detail">
                  <span className="label">Frequency:</span>
                  <span className="value">{service.frequency}</span>
                </div>
              </div>
              
              <button 
                className="service-cta"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <div className="footer-content">
            <h3>Ready to Get Started?</h3>
            <p>Every child's journey is unique. Let's create a personalized plan that works for your family.</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;