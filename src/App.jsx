import React from 'react';
import './App.css';
import EssayWriterImage from './assets/essay-writer.svg';
import ParagraphGeneratorImage from './assets/paragraph-generator.svg';
import MathSolverImage from './assets/math-solver.svg';
import AiQuestionImage from './assets/ai-question.svg';
import AiDetectorImage from './assets/ai-detector.svg';
import CaktusLogo from './assets/caktus-logo.svg';
import CaktusPromoImage from './assets/caktus-promo.svg';
import LivvyDunneImage from './assets/livvy-dunne.png';
import EguanaLLMImage from './assets/eguana-llm.svg';
import WritingSlidersImage from './assets/writing-sliders.svg';
import MathScienceBookImage from './assets/math-science-book.svg';
import JoinCaktusBannerImage from './assets/join-caktus-banner.svg';
import CaktusFooterLogo from './assets/caktus-footer-logo.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={CaktusLogo} alt="Caktus Logo" className="caktus-logo" />
          Caktus
        </div>
        <nav className="nav">
          <a href="#">TOOLS</a>
          <a href="#">ESSAY WRITER</a>
          <a href="#">PRICING</a>
          <a href="#">BLOG</a>
          <a href="#">AMBASSADOR</a>
          <a href="#">ABOUT US</a>
        </nav>
        <div className="auth">
          <a href="#">LOG IN</a>
          <button>JOIN CAKTUS</button>
        </div>
      </header>

      <section className="hero">
        <h1>CAKTUS AI</h1>
        <p>The ultimate AI homework helper</p>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src={EssayWriterImage} alt="Essay Writer" />
          <h3>Essay Writer</h3>
          <p>Create polished essays with AI assistance for enhanced understanding.</p>
        </div>
        <div className="feature-card">
          <img src={ParagraphGeneratorImage} alt="Paragraph Generator" />
          <h3>Paragraph Generator</h3>
          <p>Generate paragraphs that will captivate your readers.</p>
        </div>
        <div className="feature-card">
          <img src={MathSolverImage} alt="Math Word Problem Solver" />
          <h3>Math Word Problem Solver</h3>
          <p>Solve complex math word problems with a click.</p>
        </div>
        <div className="feature-card">
          <img src={AiQuestionImage} alt="AI Question Solver" />
          <h3>AI Question Solver</h3>
          <p>Ask Caktus a question, any question, and receive an answer in moments!</p>
        </div>
        <div className="feature-card">
          <img src={AiDetectorImage} alt="AI Content Detector" />
          <h3>AI Content Detector</h3>
          <p>Check if your content can bypass AI detectors.</p>
        </div>
      </section>

      <section className="promo">
        <div className="promo-text">
          <h2>GET AHEAD WITH CAKTUS</h2>
          <p>Caktus AI is a platform built to get your work done. Trained with over 260 million research papers in almost every language, Caktus has built the first AI homework helper to get your work done.</p>
          <ul>
            <li>✔️ Write 10-page essays backed by real citations</li>
            <li>✔️ Answer AI homework questions</li>
            <li>✔️ Bypass detection to keep you safe</li>
            <li>✔️ Keep your notes and homework in one place</li>
          </ul>
        </div>
        <div className="promo-image">
          <img src={CaktusPromoImage} alt="Caktus Promo" />
        </div>
      </section>

      <section className="testimonials">
        <h2>WHAT STUDENTS ARE SAYING</h2>
        <div className="testimonial-card">
          <img src={LivvyDunneImage} alt="Livvy Dunne" />
          <blockquote>
            With social media, school, and my sport, it is definitely hard to find time. <b>Caktus AI is so helpful</b> with all my school work so I definitely recommend!
          </blockquote>
          <p>- Livvy Dunne, LSU</p>
        </div>
      </section>

      <section className="eguana">
        <div className="eguana-text">
          <p className="specialized">SPECIALIZED AI FOR STUDENTS</p>
          <h2>EGUANA LLM</h2>
          <p>Our AI model is powered by EGUANA, a state-of-the-art technology built exclusively for academic inferences. Trained with over 260 million research articles and essays worldwide, Eguana adds quality sources and personalization to excel at generating high-quality outputs. It is truly the first AI made just for students.</p>
          <button>Try it now</button>
        </div>
        <div className="eguana-image">
          <img src={EguanaLLMImage} alt="Eguana LLM" />
        </div>
      </section>

      <section className="writing">
        <div className="writing-image">
          <img src={WritingSlidersImage} alt="Writing Sliders" />
        </div>
        <div className="writing-text">
          <h2>EXCEL AT WRITING</h2>
          <p>We have nailed the art of everything about writing, but especially essays. Get top-notch sources and make your voice shine through.</p>
          <p>We guide students through the best way to write and achieve the A+ they deserve. We can also just give you awesome undetectable AI examples, just in case that's what you're in for.</p>
          <button>Start Writing</button>
        </div>
      </section>

      <section className="math-science">
        <div className="math-science-image">
          <img src={MathScienceBookImage} alt="Math & Science Book" />
        </div>
        <div className="math-science-text">
          <h2>UNDERSTAND MATH & SCIENCE</h2>
          <p>We can't predict when you'll get rich, or have more friends, but we can support you with science and math homework answers that will free your time to figure everything else out.</p>
          <p>Caktus provides step-by-step solutions to math, science, and coding problems to facilitate thorough understanding.</p>
          <button>Get Solutions</button>
        </div>
      </section>

      <section className="join-caktus">
        <img src={JoinCaktusBannerImage} alt="Join Caktus Banner" />
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <img src={CaktusFooterLogo} alt="Caktus Footer Logo" />
          Caktus
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Tools</h3>
            <ul>
              <li><a href="#">Essay Writer</a></li>
              <li><a href="#">Paragraph Generator</a></li>
              <li><a href="#">Question Solver</a></li>
              <li><a href="#">Hook Generator</a></li>
              <li><a href="#">Conclusion Writer</a></li>
              <li><a href="#">Discussion Board Post Generator</a></li>
              <li><a href="#">Paragraph Rewriter</a></li>
              <li><a href="#">LinkedIn Summary Generator</a></li>
              <li><a href="#">Essay Rewriter</a></li>
              <li><a href="#">Math Word Problem Solver</a></li>
              <li><a href="#">All Tools</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Ambassador</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Content</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Research</a></li>
            </ul>
          </div>
        </div>
        <p>&copy; 2024 Caktus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
