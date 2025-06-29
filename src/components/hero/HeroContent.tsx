import { RefObject, useState } from 'react';

interface HeroContentProps {
  contentRef: RefObject<HTMLDivElement>;
}

export default function HeroContent({ contentRef }: HeroContentProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [scanningPhase, setScanningPhase] = useState('');

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    // Medical scanning phases
    const phases = [
      'Initializing Medical Scanner...',
      'Scanning Resume Data...',
      'Analyzing Medical Credentials...',
      'Processing AI/ML Expertise...',
      'Validating Medical Robotics Skills...',
      'Generating Medical Report...',
      'Download Complete!'
    ];
    
    // Simulate medical scanning process
    for (let i = 0; i < phases.length; i++) {
      setScanningPhase(phases[i]);
      setDownloadProgress((i + 1) * (100 / phases.length));
      await new Promise(resolve => setTimeout(resolve, 400));
    }
    
    // Trigger actual download
    const link = document.createElement('a');
    link.href = '/Prathap_Resume.pdf';
    link.download = 'Prathap_SelvaKumar_Medical_AI_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset after success animation
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadProgress(0);
      setScanningPhase('');
    }, 1500);
  };

  return (
    <div ref={contentRef} className="w-full md:w-3/5 text-center md:text-left order-1 md:order-2 transition-transform duration-300">
      <div className="space-y-5 max-w-lg mx-auto md:mx-0">
        {/* Simple "Hi" greeting */}
        <div className="mb-4 h-16">
          <div className="text-3xl md:text-4xl font-bold text-primary animate-text-reveal">
            <span className="inline-block transform transition-all duration-500 text-4xl md:text-5xl">
              Hi,
            </span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-text-reveal">
          I'm <span className="highlight-text">Prathap Selva Kumar</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground animate-text-reveal" style={{ animationDelay: "150ms" }}>
          AI Enthusiast | Medical Robotics | Software Engineer
        </h2>
        
        <p className="text-lg text-foreground/80 animate-text-reveal" style={{ animationDelay: "300ms" }}>
          Advancing intelligent medical systems that seamlessly integrate robotics and artificial intelligence to bridge the gap between clinical hardware and intelligent software.
        </p>
        
        <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start stagger-fade-in">
          <button 
            onClick={handleDownloadResume}
            disabled={isDownloading}
            className={`medical-download-btn group relative overflow-hidden tilt-card transition-all duration-300 ${
              isDownloading ? 'medical-scanning' : 'medical-idle'
            }`}
          >
            {/* Medical Scanner Background */}
            <div className="absolute inset-0 medical-scanner-bg"></div>
            
            {/* DNA Helix Animation */}
            {isDownloading && (
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <div className="dna-helix">
                  <div className="dna-strand strand-1"></div>
                  <div className="dna-strand strand-2"></div>
                </div>
              </div>
            )}
            
            {/* Medical Cross Scanner */}
            <div className={`medical-cross ${isDownloading ? 'scanning' : ''}`}>
              <div className="cross-vertical"></div>
              <div className="cross-horizontal"></div>
              {isDownloading && <div className="scanner-beam"></div>}
            </div>
            
            {/* Heartbeat Line */}
            {isDownloading && (
              <div className="heartbeat-line">
                <svg viewBox="0 0 100 20" className="heartbeat-svg">
                  <path 
                    d="M0,10 L20,10 L25,5 L30,15 L35,0 L40,20 L45,10 L100,10" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    className="heartbeat-path"
                  />
                </svg>
              </div>
            )}
            
            {/* Medical Progress Bar */}
            {isDownloading && (
              <div className="medical-progress-container">
                <div className="medical-progress-bar">
                  <div 
                    className="medical-progress-fill"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                  <div className="progress-pulse"></div>
                </div>
                <div className="progress-percentage">{Math.round(downloadProgress)}%</div>
              </div>
            )}
            
            {/* Medical Particles */}
            {isDownloading && (
              <div className="medical-particles">
                <div className="particle particle-1">+</div>
                <div className="particle particle-2">⚕</div>
                <div className="particle particle-3">+</div>
                <div className="particle particle-4">⚕</div>
              </div>
            )}
            
            {/* Button Content */}
            <div className={`btn-content ${isDownloading ? 'scanning-mode' : ''}`}>
              {isDownloading ? (
                <div className="scanning-content">
                  <div className="medical-icon-container">
                    <svg className="medical-scanner-icon" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
                        fill="currentColor"
                        className="scanner-icon-fill"
                      />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" className="scanner-circle"/>
                    </svg>
                  </div>
                  <div className="scanning-text">
                    <div className="scanning-phase">{scanningPhase}</div>
                  </div>
                </div>
              ) : (
                <div className="idle-content">
                  <svg 
                    className="download-icon" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <span>Download Medical Resume</span>
                </div>
              )}
            </div>
            
            {/* Success Checkmark */}
            {downloadProgress === 100 && (
              <div className="medical-success">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    stroke="currentColor"
                    d="M5 13l4 4L19 7" 
                    className="success-path"
                  />
                </svg>
              </div>
            )}
          </button>
          
          <a 
            href="https://www.linkedin.com/in/prathapselvakumar/"  
            className="btn-secondary group relative overflow-hidden tilt-card hover:scale-105 active:scale-95 transition-all duration-300"
            target="_blank" 
          >
            <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            <span className="transition-all duration-300 group-hover:tracking-wide">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}