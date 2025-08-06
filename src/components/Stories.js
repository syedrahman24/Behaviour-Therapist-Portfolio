import React, { useState } from 'react';
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
      story: "When Emma first came to our practice, she was using only 5-10 single words and showed significant frustration when trying to communicate her needs. Through a comprehensive ABA program focusing on functional communication training, Emma learned to use picture cards and eventually developed over 200 spoken words. Her parents report that family meals are now enjoyable conversations, and Emma confidently expresses her wants and feelings.",
      highlights: [
        "Increased vocabulary from 10 to 200+ words",
        "Reduced meltdowns by 85%",
        "Successfully transitioned to mainstream preschool",
        "Parents gained confidence in supporting Emma's communication"
      ],
      parentQuote: "Dr. Mitchell didn't just help Emma - she transformed our entire family dynamic. We finally have the tools to connect with our daughter."
    },
    {
      title: "Jake's Social Skills Journey",
      age: "Age 8",
      challenge: "ADHD and Social Anxiety - Difficulty making friends",
      duration: "6 months",
      outcome: "Successful peer relationships and improved classroom behavior",
      story: "Jake struggled with impulsivity and reading social cues, leading to isolation and behavioral outbursts at school. Through targeted social skills training and behavioral interventions, Jake learned to recognize social situations, practice appropriate responses, and manage his emotions. He now has a close group of friends and has been invited to three birthday parties this year!",
      highlights: [
        "Formed lasting friendships with 4 classmates",
        "Reduced classroom disruptions by 70%",
        "Improved emotional regulation skills",
        "Increased self-confidence and self-advocacy"
      ],
      parentQuote: "Watching Jake make friends and seeing him genuinely happy at school has been the greatest gift. Dr. Mitchell helped him find his confidence."
    },
    {
      title: "Lily's Anxiety Success",
      age: "Age 12",
      challenge: "Severe separation anxiety affecting school attendance",
      duration: "4 months",
      outcome: "Full return to school with confidence",
      story: "Lily's separation anxiety had become so severe that she missed 40% of the school year. Working together with the family and school team, we developed a gradual exposure plan combined with coping strategies. Lily learned breathing techniques, positive self-talk, and built confidence through small successes. She now attends school regularly and even enjoys sleepovers with friends.",
      highlights: [
        "Improved school attendance from 60% to 98%",
        "Mastered anxiety coping strategies",
        "Participated in first sleepover",
        "Family stress levels significantly reduced"
      ],
      parentQuote: "We have our happy, confident daughter back. The techniques Dr. Mitchell taught us work for the whole family during stressful times."
    },
    {
      title: "Alex's Behavioral Transformation",
      age: "Age 6",
      challenge: "Aggressive behaviors and emotional dysregulation",
      duration: "10 months",
      outcome: "Peaceful home environment and successful school integration",
      story: "Alex was experiencing daily aggressive outbursts that were affecting his relationships with family and peers. Through functional behavior assessment and positive behavior support planning, we identified triggers and taught Alex alternative ways to express frustration. The transformation has been remarkable - Alex now uses words instead of actions and has developed genuine friendships.",
      highlights: [
        "Eliminated aggressive incidents at home",
        "Reduced school behavioral reports by 95%",
        "Developed empathy and emotional awareness",
        "Strengthened family relationships"
      ],
      parentQuote: "Alex is like a different child. Our home is peaceful again, and we can actually enjoy family time together. Dr. Mitchell gave us hope when we thought there wasn't any."
    }
  ];

  return (
    <section id="stories" className="stories">
      <div className="container">
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Real families, real transformations, real hope</p>
        </div>

        <div className="stories-navigation">
          {stories.map((story, index) => (
            <button
              key={index}
              className={`story-tab ${activeStory === index ? 'active' : ''}`}
              onClick={() => setActiveStory(index)}
            >
              <span className="tab-title">{story.title.split("'s")[0]}</span>
              <span className="tab-age">{story.age}</span>
            </button>
          ))}
        </div>

        <div className="story-content">
          <div className="story-header">
            <h3>{stories[activeStory].title}</h3>
            <div className="story-meta">
              <span className="meta-item">
                <strong>Age:</strong> {stories[activeStory].age}
              </span>
              <span className="meta-item">
                <strong>Duration:</strong> {stories[activeStory].duration}
              </span>
              <span className="meta-item">
                <strong>Outcome:</strong> {stories[activeStory].outcome}
              </span>
            </div>
          </div>

          <div className="challenge-box">
            <h4>Initial Challenge</h4>
            <p>{stories[activeStory].challenge}</p>
          </div>

          <div className="story-body">
            <p>{stories[activeStory].story}</p>
          </div>

          <div className="highlights">
            <h4>Key Achievements</h4>
            <ul>
              {stories[activeStory].highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <blockquote className="parent-quote">
            <p>"{stories[activeStory].parentQuote}"</p>
            <cite>- Parent testimonial</cite>
          </blockquote>
        </div>

        <div className="stories-footer">
          <div className="footer-message">
            <h3>Your Child's Success Story Awaits</h3>
            <p>
              Every child has the potential for growth and positive change. These stories represent 
              real families who took the first step toward transformation. With patience, evidence-based 
              interventions, and collaborative support, your family can achieve similar success.
            </p>
            <button 
              className="btn btn-primary"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey Today
            </button>
          </div>
        </div>

        <div className="privacy-note">
          <p><em>All stories are shared with family permission and some details have been modified to protect privacy while maintaining the authenticity of the outcomes.</em></p>
        </div>
      </div>
    </section>
  );
};

export default Stories;