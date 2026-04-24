import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    // Staggered reveal on load
    document.querySelectorAll('.project-card').forEach((el, i) => {
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
    <div id="page-projects" className="page active">
      <div className="projects-hero">
        <div className="hero-eyebrow" style={{fontSize:'11px',letterSpacing:'0.2em',textTransform:'uppercase',color:'var(--accent)',display:'flex',alignItems:'center',gap:'.8rem',marginBottom:'1.2rem'}}>
          <span style={{width:'32px',height:'1px',background:'var(--accent)',display:'inline-block'}}></span>
          Selected Work
        </div>
        <h2>Projects &<br/><span style={{color:'var(--accent)'}}>Builds_</span></h2>
        <p>From AI-powered agritech dashboards to GraphRAG trade simulations. Each project is a real problem, solved with real code.</p>
      </div>

      <div className="projects-grid">

        {/* PROJECT 1 */}
        <a className="project-card featured" href="https://github.com/chaithanya812/Digital-Archaeologist" target="_blank" rel="noopener noreferrer">
          <div>
            <div className="featured-badge">★ Featured</div>
            <div className="project-num">Project 01</div>
            <div className="project-title">Digital Analyzer</div>
            <p className="project-desc">
              Built an AI application for audio transcription, text reconstruction, and image analysis using Google APIs. 
              Integrated Google Speech-to-Text, Vision, and Gemini APIs to build a multi-modal AI pipeline.
              Designed a modular backend allowing seamless switching between transcription, reconstruction, and image analysis modes.
            </p>
            <div className="project-stack">
              <span className="stack-tag">TypeScript</span>
              <span className="stack-tag">Gemini API</span>
              <span className="stack-tag">Vision API</span>
              <span className="stack-tag">Speech-to-Text</span>
            </div>
            <span className="project-link">View on GitHub →</span>
          </div>
          <div className="project-visual">🧠</div>
        </a>

        {/* PROJECT 2 */}
        <a className="project-card" href="https://github.com/chaithanya812/Decentralized-freelance" target="_blank" rel="noopener noreferrer">
          <div className="project-num">Project 02</div>
          <div className="project-title">Decentralized Freelance Platform</div>
          <p className="project-desc">
            Developing a blockchain freelance marketplace with Ethereum smart contracts and escrow payments.
            Implemented Solidity smart contracts for milestone-based escrow, ensuring trustless payments between freelancers and clients.
            Built a Next.js front-end integrated with Web3.js for wallet connection and on-chain transaction management.
          </p>
          <div className="project-stack">
            <span className="stack-tag">Solidity</span>
            <span className="stack-tag">Next.js</span>
            <span className="stack-tag">Web3.js</span>
            <span className="stack-tag">Ethereum</span>
          </div>
          <span className="project-link">View on GitHub →</span>
        </a>

        {/* PROJECT 3 */}
        <a className="project-card" href="https://github.com/chaithanya812/Schrodinger-s-Quantum-Crates" target="_blank" rel="noopener noreferrer">
          <div className="project-num">Project 03</div>
          <div className="project-title">Schrodinger's Quantum Crates</div>
          <p className="project-desc">
            A blockchain probability experiment. Mint a crate, open it, and collapse the wave function. Will your cat be alive, dead, or... both? Built with Sui blockchain and Move smart contracts.
          </p>
          <div className="project-stack">
            <span className="stack-tag">TypeScript</span>
            <span className="stack-tag">Sui Blockchain</span>
            <span className="stack-tag">Move</span>
          </div>
          <span className="project-link">View on GitHub →</span>
        </a>

        {/* PROJECT 4 */}
        <a className="project-card" href="https://github.com/chaithanya812/AQUA-DEX" target="_blank" rel="noopener noreferrer">
          <div className="project-num">Project 04</div>
          <div className="project-title">AQUA-DEX</div>
          <p className="project-desc">
            A decentralized exchange protocol project built with TypeScript.
          </p>
          <div className="project-stack">
            <span className="stack-tag">TypeScript</span>
            <span className="stack-tag">DeFi</span>
            <span className="stack-tag">Web3</span>
          </div>
          <span className="project-link">View on GitHub →</span>
        </a>

      </div>

      <footer>
        <p>Chaithanya Vankina · SE23UCSE045 · Mahindra University · 
          <a href="https://github.com/chaithanya812" target="_blank" rel="noopener noreferrer"> github.com/chaithanya812</a>
        </p>
      </footer>
    </div>
  );
};

export default Projects;
