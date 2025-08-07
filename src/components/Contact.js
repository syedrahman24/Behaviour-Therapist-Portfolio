import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    urgency: 'routine',
    concerns: '',
    message: ''
  });
  const [isSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    alert('Thank you for your message! I will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      childAge: '',
      urgency: 'routine',
      concerns: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-badge">Contact Us</div>
          <h2 className="section-title">
            Let's Start Your Child's <span className="title-highlight">Success Journey</span>
          </h2>
          <p className="section-subtitle">
            Ready to take the first step? I'm here to help you and your family thrive through evidence-based behavioral therapy.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Get in Touch Section */}
          <motion.div 
            className="contact-section get-in-touch"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="section-icon">💬</div>
            <h3 className="section-title">Get in Touch</h3>
            <p className="section-description">
              I understand that reaching out can feel overwhelming. Our initial consultation is a safe, 
              judgment-free space to discuss your concerns and explore how we can help your child thrive.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-info">
                  <h4>Phone Consultation</h4>
                  <p>(555) 123-4567</p>
                  <span>Mon-Fri: 8AM-6PM</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>dr.hudajabeen@therapy.com</p>
                  <span>Response within 24 hours</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>Office Location</h4>
                  <p>123 Wellness Drive<br/>Springfield, ST 12345</p>
                  <span>Easy parking available</span>
                </div>
              </div>

              <div className="contact-method emergency">
                <div className="method-icon">🚨</div>
                <div className="method-info">
                  <h4>Crisis Support</h4>
                  <p>(555) 123-4567 ext. 911</p>
                  <span>24/7 emergency consultation</span>
                </div>
              </div>
            </div>

            <div className="insurance-info">
              <div className="insurance-header">
                <span className="insurance-icon">💳</span>
                <h4>Insurance & Payment</h4>
              </div>
              <ul>
                <li>Most major insurance plans accepted</li>
                <li>Flexible payment plans available</li>
                <li>HSA/FSA eligible services</li>
                <li>Free initial consultation</li>
              </ul>
            </div>
          </motion.div>

          {/* Schedule Free Consultation Section */}
          <motion.div 
            className="contact-section consultation-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="section-icon">📅</div>
            <h3 className="section-title">Schedule Your Free Consultation</h3>
            <p className="section-description">
              Take the first step towards your child's success. Our comprehensive consultation helps us understand your unique needs.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Parent/Guardian Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childAge">Child's Age</label>
                  <select
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                  >
                    <option value="">Select age range</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-8">6-8 years</option>
                    <option value="9-12">9-12 years</option>
                    <option value="13-17">13-17 years</option>
                    <option value="18+">18+ years</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="urgency">Consultation Priority</label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                >
                  <option value="routine">Routine (within 2 weeks)</option>
                  <option value="priority">Priority (within 1 week)</option>
                  <option value="urgent">Urgent (within 2-3 days)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="concerns">Primary Concerns (check all that apply)</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" name="concerns" value="communication" />
                    Communication/Language
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concerns" value="behavior" />
                    Behavioral Challenges
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concerns" value="social" />
                    Social Skills
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concerns" value="anxiety" />
                    Anxiety/Emotional Regulation
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concerns" value="school" />
                    School-related Issues
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" name="concerns" value="autism" />
                    Autism Spectrum Support
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Please share any additional details about your child's needs or your family's situation..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Schedule Free Consultation'}
              </button>
            </form>

            <div className="form-footer">
              <p>
                <strong>Privacy Promise:</strong> Your information is completely confidential and 
                protected under HIPAA regulations. We will never share your details with third parties.
              </p>
            </div>
          </motion.div>

          {/* What to Expect Section */}
          <motion.div 
            className="contact-section what-to-expect"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="section-icon">✨</div>
            <h3 className="section-title">What to Expect</h3>
            <p className="section-description">
              Our consultation process is designed to be comfortable, informative, and tailored to your family's unique needs.
            </p>

            <div className="expectation-steps">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Initial Discussion</h4>
                  <p>We'll discuss your child's challenges, strengths, and your family's goals in a supportive environment.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Assessment Planning</h4>
                  <p>Together, we'll create a personalized assessment plan to understand your child's specific needs.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Treatment Roadmap</h4>
                  <p>I'll outline evidence-based interventions and create a clear path forward for your child's success.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Family Support</h4>
                  <p>We'll discuss how to support your child at home and coordinate with schools and other providers.</p>
                </div>
              </div>
            </div>

            <div className="consultation-benefits">
              <div className="benefit-header">
                <span className="benefit-icon">🎯</span>
                <h4>Consultation Benefits</h4>
              </div>
              <ul>
                <li>Comprehensive understanding of your child's needs</li>
                <li>Clear treatment recommendations and timeline</li>
                <li>Insurance and payment options discussion</li>
                <li>Resources and strategies you can start using immediately</li>
                <li>No obligation to continue beyond consultation</li>
              </ul>
            </div>

            <div className="commitment-badge">
              <div className="badge-icon">💝</div>
              <div className="badge-content">
                <h4>My Commitment to You</h4>
                <p>Every family deserves compassionate, evidence-based care. I'm here to support your journey with expertise, understanding, and hope.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;