import React, { useState } from 'react';
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
      <div className="container">
        <div className="section-header">
          <h2>Let's Start Your Child's Journey</h2>
          <p>Ready to take the first step? I'm here to help you and your family succeed.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              I understand that reaching out for help can feel overwhelming. Rest assured 
              that our initial consultation is a safe, judgment-free space where we can 
              discuss your concerns and explore how behavioral therapy can help your child thrive.
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
                  <p>dr.hudajabeen.com</p>
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
              <h4>Insurance & Payment</h4>
              <ul>
                <li>Most major insurance plans accepted</li>
                <li>Flexible payment plans available</li>
                <li>HSA/FSA eligible services</li>
                <li>Free initial consultation</li>
              </ul>
            </div>
          </div>

          <div className="contact-form">
            <h3>Schedule Your Free Consultation</h3>
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

              <button type="submit" className="btn btn-primary">
                Request Free Consultation
              </button>

              <p className="form-note">
                * Required fields. All information is kept strictly confidential in accordance with HIPAA regulations.
              </p>
            </form>
          </div>
        </div>

        <div className="consultation-info">
          <h3>What to Expect in Your Free Consultation</h3>
          <div className="consultation-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Initial Discussion (15-20 minutes)</h4>
                <p>We'll talk about your child's current challenges and your family's goals.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Assessment Overview (10 minutes)</h4>
                <p>I'll explain the evaluation process and what to expect in our sessions.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Next Steps (5-10 minutes)</h4>
                <p>We'll discuss timeline, scheduling, and answer any questions you have.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;