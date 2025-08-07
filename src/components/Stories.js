import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Stories.css';

const Stories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: "Emma's Communication Breakthrough",
      age: "Age 5",
      challenge: "Autism Spectrum Disorder - Limited verbal communication",
      duration: "8 months",
      outcome: "90% improvement in functional communication",
      category: "Communication",
      successRate: "90%",
      color: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      icon: "💬",
      story: "When Emma first came to our practice, she was using only 5-10 single words and showed significant frustration when trying to communicate her needs. Through a comprehensive ABA program focusing on functional communication training, Emma learned to use picture cards and eventually developed over 200 spoken words. Her parents report that family meals are now enjoyable conversations, and Emma confidently expresses her wants and feelings.",
      highlights: [
        "Increased vocabulary from 10 to 200+ words",
        "Reduced meltdowns by 85%",
        "Successfully transitioned to mainstream preschool",
        "Parents gained confidence in supporting Emma's communication"
      ],
      parentQuote: "Dr. Mitchell didn't just help Emma - she transformed our entire family dynamic. We finally have the tools to connect with our daughter.",
      parentName: "Sarah M.",
      location: "Austin, TX"
    },
    {
      title: "Jake's Social Skills Journey",
      age: "Age 8",
      challenge: "ADHD and Social Anxiety - Difficulty making friends",
      duration: "6 months",
      outcome: "Successful peer relationships and improved classroom behavior",
      category: "Social Skills",
      successRate: "85%",
      color: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      icon: "👥",
      story: "Jake struggled with impulsivity and reading social cues, leading to isolation and behavioral outbursts at school. Through targeted social skills training and behavioral interventions, Jake learned to recognize social situations, practice appropriate responses, and manage his emotions. He now has a close group of friends and has been invited to three birthday parties this year!",
      highlights: [
        "Formed lasting friendships with 4 classmates",
        "Reduced classroom disruptions by 70%",
        "Improved emotional regulation skills",
        "Increased self-confidence and self-advocacy"
      ],
      parentQuote: "Watching Jake make friends and seeing him genuinely happy at school has been the greatest gift. Dr. Mitchell helped him find his confidence.",
      parentName: "Maria L.",
      location: "Dallas, TX"
    },
    {
      title: "Lily's Anxiety Success",
      age: "Age 12",
      challenge: "Severe separation anxiety affecting school attendance",
      duration: "4 months",
      outcome: "Full return to school with confidence",
      category: "Anxiety Management",
      successRate: "98%",
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      icon: "🌟",
      story: "Lily's separation anxiety had become so severe that she missed 40% of the school year. Working together with the family and school team, we developed a gradual exposure plan combined with coping strategies. Lily learned breathing techniques, positive self-talk, and built confidence through small successes. She now attends school regularly and even enjoys sleepovers with friends.",
      highlights: [
        "Improved school attendance from 60% to 98%",
        "Mastered anxiety coping strategies",
        "Participated in first sleepover",
        "Family stress levels significantly reduced"
      ],
      parentQuote: "We have our happy, confident daughter back. The techniques Dr. Mitchell taught us work for the whole family during stressful times.",
      parentName: "Jennifer K.",
      location: "Houston, TX"
    },
    {
      title: "Alex's Behavioral Transformation",
      age: "Age 6",
      challenge: "Aggressive behaviors and emotional dysregulation",
      duration: "10 months",
      outcome: "Peaceful home environment and successful school integration",
      category: "Behavioral Support",
      successRate: "95%",
      color: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      icon: "🎯",
      story: "Alex was experiencing daily aggressive outbursts that were affecting his relationships with family and peers. Through functional behavior assessment and positive behavior support planning, we identified triggers and taught Alex alternative ways to express frustration. The transformation has been remarkable - Alex now uses words instead of actions and has developed genuine friendships.",
      highlights: [
        "Eliminated aggressive incidents at home",
        "Reduced school behavioral reports by 95%",
        "Developed empathy and emotional awareness",
        "Strengthened family relationships"
      ],
      parentQuote: "Alex is like a different child. Our home is peaceful again, and we can actually enjoy family time together. Dr. Mitchell gave us hope when we thought there wasn't any.",
      parentName: "David & Lisa R.",
      location: "San Antonio, TX"
    }
  ];

  return (
    <section id="stories" className="stories">
      <div className="stories-container">
        <motion.div 
          className="stories-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Success Stories</span>
          <h2 className="section-title">
            Real Families, <span className="title-highlight">Real Transformations</span>
          </h2>
          <p className="section-subtitle">
            Discover how evidence-based therapy has transformed the lives of children and families
          </p>
        </motion.div>

        <motion.div 
          className="stories-navigation"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stories.map((story, index) => (
            <motion.button
              key={index}
              className={`story-tab ${activeStory === index ? 'active' : ''}`}
              onClick={() => setActiveStory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="tab-header">
                <div className={`tab-icon bg-gradient-to-br ${story.color}`}>
                  <span>{story.icon}</span>
                </div>
                <div className="tab-category">
                  <span className="category-badge">{story.category}</span>
                </div>
              </div>
              <div className="tab-info">
                <span className="tab-name">{story.title.split("'s")[0]}</span>
                <span className="tab-age">{story.age}</span>
              </div>
              <div className="tab-success">
                <div className="success-rate">
                  <span className="rate-value">{story.successRate}</span>
                  <span className="rate-label">Success</span>
                </div>
              </div>
              {activeStory === index && (
                <motion.div 
                  className="active-indicator"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeStory}
            className="story-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="story-main">
              <div className="story-header">
                <div className="story-title-section">
                  <div className={`story-icon-large bg-gradient-to-br ${stories[activeStory].color}`}>
                    <span>{stories[activeStory].icon}</span>
                  </div>
                  <div className="title-content">
                    <h3 className="story-title">{stories[activeStory].title}</h3>
                    <div className="story-badges">
                      <span className={`category-badge-large bg-gradient-to-r ${stories[activeStory].color}`}>
                        {stories[activeStory].category}
                      </span>
                      <span className="success-badge">
                        <span className="success-icon">🏆</span>
                        {stories[activeStory].successRate} Success Rate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="story-meta">
                  <motion.div 
                    className="meta-card age-card"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="meta-icon-wrapper age-icon">
                      <span className="meta-icon">👶</span>
                    </div>
                    <div className="meta-content">
                      <span className="meta-label">Age</span>
                      <span className="meta-value">{stories[activeStory].age}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="meta-card duration-card"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="meta-icon-wrapper duration-icon">
                      <span className="meta-icon">⏰</span>
                    </div>
                    <div className="meta-content">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{stories[activeStory].duration}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="meta-card outcome-card"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="meta-icon-wrapper outcome-icon">
                      <span className="meta-icon">🎯</span>
                    </div>
                    <div className="meta-content">
                      <span className="meta-label">Outcome</span>
                      <span className="meta-value">{stories[activeStory].outcome}</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="challenge-section">
                <div className="challenge-card">
                  <h4 className="challenge-title">
                    <span className="challenge-icon">⚡</span>
                    Initial Challenge
                  </h4>
                  <p className="challenge-text">{stories[activeStory].challenge}</p>
                </div>
              </div>

              <div className="story-narrative">
                <h4 className="narrative-title">The Journey</h4>
                <p className="narrative-text">{stories[activeStory].story}</p>
              </div>

              <div className="achievements-section">
                <h4 className="achievements-title">
                  <span className="achievements-icon">🏆</span>
                  Key Achievements
                </h4>
                <div className="achievements-grid">
                  {stories[activeStory].highlights.map((highlight, index) => (
                    <motion.div 
                      key={index}
                      className="achievement-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="achievement-check">✓</span>
                      <span className="achievement-text">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <div className="avatar-circle">
                      <span className="avatar-icon">👨‍👩‍👧‍👦</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <span className="testimonial-name">{stories[activeStory].parentName}</span>
                    <span className="testimonial-location">{stories[activeStory].location}</span>
                  </div>
                  <div className="testimonial-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <motion.span 
                          key={i}
                          className="star"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                    <span className="rating-text">5.0</span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="quote-marks">
                    <span className="quote-left">"</span>
                    <span className="quote-right">"</span>
                  </div>
                  <blockquote className="testimonial-text">
                    {stories[activeStory].parentQuote}
                  </blockquote>
                  <div className="testimonial-footer">
                    <span className="verified-badge">
                      <span className="verified-icon">✅</span>
                      Verified Parent Review
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        

        <div className="privacy-note">
          <p>
            <span className="privacy-icon">🔒</span>
            All stories are shared with family permission and some details have been modified to protect privacy while maintaining the authenticity of the outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;