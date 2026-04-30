import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Search, 
  Activity, 
  Zap, 
  Bot, 
  CheckCircle2, 
  AlertTriangle,
  BarChart3,
  MessageSquare,
  Cpu,
  Workflow
} from 'lucide-react';
import './index.css';

function App() {
  const [productName, setProductName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!productName.trim()) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate API call/processing time
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar glass">
        <a href="/" className="nav-brand">
          <ShieldCheck className="text-indigo-500" />
          <span>TrustAnalyzer</span>
        </a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>AI Product Trust Analyzer</h1>
          <p>Analyze product reliability, detect fake reviews instantly, and make informed purchasing decisions with our advanced AI and workflow automation.</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' })}>
            <Search size={20} />
            Analyze Now
          </button>
        </motion.div>
      </section>

      {/* Analyzer Section */}
      <section id="analyzer">
        <div className="section-title">Check a Product</div>
        <div className="section-subtitle">Enter any product name or URL to instantly generate a comprehensive AI trust report.</div>
        
        <div className="analyzer-card glass">
          <form onSubmit={handleAnalyze} className="input-group">
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g. Sony WH-1000XM5 Headphones..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={isAnalyzing}>
              {isAnalyzing ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Activity size={20} />
                </motion.div>
              ) : (
                <><Bot size={20} /> Check Product</>
              )}
            </button>
          </form>

          {showResults && (
            <motion.div 
              className="results-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
            >
              <div className="score-circle" style={{ '--score-deg': '300deg' }}>
                <span className="score-value">84</span>
                <span className="score-label">Trust Score</span>
              </div>
              
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">
                    <AlertTriangle size={16} />
                    <span>Fake Review Probability</span>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)' }}>
                    Low (12%)
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '12%', backgroundColor: 'var(--success)' }}></div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <MessageSquare size={16} />
                    <span>Customer Sentiment</span>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60A5FA' }}>
                    Highly Positive
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%', backgroundColor: '#60A5FA' }}></div>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <CheckCircle2 size={16} />
                    <span>AI Verdict</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    Based on analyzing 1,240 reviews across 3 platforms, this product shows consistent quality and legitimate feedback patterns. Recommended.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="section-title">Why Trust Us?</div>
        <div className="section-subtitle">Our platform leverages cutting-edge technology to give you the most accurate product insights.</div>
        
        <div className="features-grid">
          <div className="feature-card glass">
            <div className="feature-icon">
              <Bot />
            </div>
            <h3>AI-Based Analysis</h3>
            <p>Advanced natural language processing models evaluate sentiment, tone, and consistency across thousands of data points.</p>
          </div>
          
          <div className="feature-card glass">
            <div className="feature-icon">
              <Search />
            </div>
            <h3>Fake Review Detection</h3>
            <p>Identify sophisticated fake reviews generated by bots or paid services using anomaly detection algorithms.</p>
          </div>
          
          <div className="feature-card glass">
            <div className="feature-icon">
              <BarChart3 />
            </div>
            <h3>Smart Trust Scoring</h3>
            <p>A proprietary scoring system that aggregates multiple trust factors into a simple, easy-to-understand metric.</p>
          </div>
          
          <div className="feature-card glass">
            <div className="feature-icon">
              <Zap />
            </div>
            <h3>Real-time Automation</h3>
            <p>Instant results powered by streamlined n8n workflow automation that gathers and processes data in seconds.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <div className="section-title">How It Works</div>
        <div className="section-subtitle">A seamless process from input to actionable insight.</div>
        
        <div className="steps-container glass" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Input Product Details</h3>
              <p>Enter the name or URL of the product you want to verify. Our system accepts items from all major e-commerce platforms.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Data Aggregation Workflow</h3>
              <p>Our n8n automation workflow instantly triggers, scraping reviews, product specs, and seller history from multiple sources.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>AI Analysis</h3>
              <p>The aggregated data is fed into our AI models which analyze sentiment, detect anomalies, and identify patterns indicative of fake reviews.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Generate Trust Report</h3>
              <p>Receive a comprehensive, easy-to-read report with a Trust Score and actionable recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="glass" style={{ padding: '4rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, #fff, #94A3B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Built for the Modern Consumer
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px', marginInline: 'auto' }}>
            The AI Product Trust Analyzer was built to solve a growing problem in e-commerce: knowing what to trust. By combining state-of-the-art artificial intelligence concepts with powerful n8n workflow automation, we can analyze vast amounts of product data and reviews faster and more accurately than a human ever could. Our goal is to bring transparency back to online shopping.
          </p>
          
          <h3 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Core Technologies</h3>
          <div className="tech-stack">
            <div className="tech-item">
              <Cpu size={24} />
              React UI
            </div>
            <div className="tech-item">
              <Workflow size={24} />
              n8n Automation
            </div>
            <div className="tech-item">
              <Bot size={24} />
              AI Logic
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <ShieldCheck className="text-indigo-500" />
            TrustAnalyzer
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} AI Product Trust Analyzer. Concept project.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
