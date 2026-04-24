import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../assets/profile.jpg.png';

const Home = () => {
  useEffect(() => {
    // Staggered reveal on load
    document.querySelectorAll('.about-card, .contact-item, .skill-pill, .research-item').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + i * 40);
    });
  }, []);

  return (
    <div id="page-home" className="page active">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">SE23UCSE045 · Mahindra University</div>
          <h1>
            <span className="line">Chaithanya</span>
            <span className="line"><span className="highlight">Vankina_</span></span>
          </h1>
          <p className="hero-description">
            Motivated computer science student passionate about building real-world systems, 
            exploring AI, blockchain, and solving practical problems through technology.
          </p>
          <div className="hero-tags">
            <span className="tag">AI/ML</span>
            <span className="tag">Blockchain</span>
            <span className="tag">React/Next.js</span>
            <span className="tag">Smart Contracts</span>
            <span className="tag">Gemini API</span>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-pic-wrap">
            <div className="profile-avatar">
              <img src={profileImg} alt="Chaithanya Vankina" />
            </div>
          </div>
          <div className="profile-stat">
            <div className="stat-num">4+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="profile-stat">
            <div className="stat-num" style={{color: 'var(--accent)'}}>1st</div>
            <div className="stat-label">Gemini Hackathon</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="section-label">// About Me <span>01</span></div>
        <div className="about-grid">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I'm Chaithanya Vankina, a Computer Science & Engineering student at Mahindra University, Hyderabad. 
              I'm deeply passionate about building real-world systems, exploring AI, blockchain, and solving practical problems through technology.
              Recently won first place for student of the year at the Google Gemini Hackathon and became an Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.
            </p>
          </div>
          <div className="about-card">
            <h3>Experience & Building</h3>
            <p>
              Currently building a Decentralized Freelance Platform with Ethereum smart contracts. 
              Previously completed a Data Analytics Internship at SODA Station (June-Aug 2025), where I helped build an analytics dashboard and contributed to developing a RAG pipeline for data retrieval and insights.
            </p>
          </div>
          <div className="about-card" style={{gridColumn: '1 / -1'}}>
            <h3>Research Interests</h3>
            <div className="research-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem'}}>
              <div className="research-item" style={{padding: '1.2rem'}}>
                <div className="ri-num">01</div>
                <div className="ri-title">Artificial Intelligence</div>
                <div className="ri-desc">Multi-modal AI pipelines, RAG for data retrieval, Gemini APIs</div>
              </div>
              <div className="research-item" style={{padding: '1.2rem'}}>
                <div className="ri-num">02</div>
                <div className="ri-title">Blockchain & Web3</div>
                <div className="ri-desc">Ethereum smart contracts, decentralized apps, escrow systems</div>
              </div>
              <div className="research-item" style={{padding: '1.2rem'}}>
                <div className="ri-num">03</div>
                <div className="ri-title">Tech Development</div>
                <div className="ri-desc">Building scalable applications, exploring trading & markets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL DETAILS */}
      <section className="section">
        <div className="section-label">// Personal Details <span>02</span></div>
        <div className="contact-row">
          <div className="contact-item">
            <span className="c-label">Full Name</span>
            <span className="c-value">Chaithanya Vankina</span>
          </div>
          <div className="contact-item">
            <span className="c-label">Roll Number</span>
            <span className="c-value">SE23UCSE045</span>
          </div>
          <div className="contact-item">
            <span className="c-label">Phone</span>
            <span className="c-value">+91 81259 69810</span>
          </div>
          <div className="contact-item">
            <span className="c-label">Personal Email</span>
            <span className="c-value"><a href="mailto:chaithanya.vankina@gmail.com">chaithanya.vankina@gmail.com</a></span>
          </div>
          <div className="contact-item">
            <span className="c-label">College Email</span>
            <span className="c-value"><a href="mailto:se23ucse045@mahindrauniversity.edu.in">se23ucse045@mahindrauniversity.edu.in</a></span>
          </div>
          <div className="contact-item">
            <span className="c-label">Location</span>
            <span className="c-value">Bahadurpally, Hyderabad 500043</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <div className="section-label">// Skills <span>03</span></div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div>
            <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: '0.8rem'}}>Languages & Frameworks</div>
            <div className="skills-grid">
              <span className="skill-pill">Python</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill">C</span>
              <span className="skill-pill">Solidity</span>
              <span className="skill-pill">Next.js</span>
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">HTML/CSS</span>
              <span className="skill-pill">SQL</span>
            </div>
          </div>
          <div>
            <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: '0.8rem'}}>AI / ML</div>
            <div className="skills-grid">
              <span className="skill-pill accent">Machine Learning</span>
              <span className="skill-pill accent">Google Gemini API</span>
              <span className="skill-pill accent">Vision API</span>
              <span className="skill-pill accent">Speech-to-Text API</span>
              <span className="skill-pill accent">RAG Pipelines</span>
            </div>
          </div>
          <div>
            <div style={{fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: '0.8rem'}}>Tools & Platforms</div>
            <div className="skills-grid">
              <span className="skill-pill">Ethereum</span>
              <span className="skill-pill">Web3.js</span>
              <span className="skill-pill">Git / GitHub</span>
              <span className="skill-pill">Oracle Cloud</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Chaithanya Vankina · SE23UCSE045 · Mahindra University · 
          <a href="https://github.com/chaithanya812" target="_blank" rel="noopener noreferrer"> github.com/chaithanya812</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
