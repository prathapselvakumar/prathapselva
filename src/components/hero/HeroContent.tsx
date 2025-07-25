import { RefObject, useState } from 'react';

interface HeroContentProps {
  contentRef: RefObject<HTMLDivElement>;
}

export default function HeroContent({ contentRef }: HeroContentProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
  setIsDownloading(true);

  const link = document.createElement('a');
  link.href = '/Prathap%20Selvakumar-CV.pdf'; // ✅ URL-encoded path
  link.download = 'Prathap_Selvakumar_CV.pdf'; // ✅ Save-as filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    setIsDownloading(false);
  }, 3000);
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
          I'm <span className="highlight-text">Prathap SelvaKumar</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground animate-text-reveal" style={{ animationDelay: "150ms" }}>
          AI Enthusiast |  Robotics | Software Engineer
        </h2>
        
        <p className="text-lg text-foreground/80 animate-text-reveal" style={{ animationDelay: "300ms" }}>
         
Advancing intelligent medical systems that seamlessly integrate robotics and artificial intelligence to bridge the gap between clinical hardware and intelligent software.
        </p>
        
        <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start stagger-fade-in">
          <button 
            onClick={handleDownloadResume}
            className={`btn-primary group relative overflow-hidden tilt-card ${
              isDownloading ? 'animate-download-heartbeat' : ''
            }`}
            disabled={isDownloading}
          >
            {/* Healing glow background when downloading */}
            {isDownloading && (
              <div className="absolute inset-0 animate-healing-glow rounded-md"></div>
            )}
            
            {/* Energy flow background when downloading */}
            {isDownloading && (
              <div className="absolute inset-0 animate-healing-energy-flow rounded-md opacity-60"></div>
            )}
            
            {/* Healing particles */}
            {isDownloading && (
              <>
                <div className="absolute top-2 left-4 w-2 h-2 bg-green-400 rounded-full animate-healing-particles" style={{ animationDelay: "0s" }}></div>
                <div className="absolute top-3 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-healing-particles" style={{ animationDelay: "0.3s" }}></div>
                <div className="absolute bottom-3 left-6 w-1 h-1 bg-purple-400 rounded-full animate-healing-particles" style={{ animationDelay: "0.6s" }}></div>
                <div className="absolute bottom-2 right-4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-healing-particles" style={{ animationDelay: "0.9s" }}></div>
                <div className="absolute top-1/2 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-healing-particles" style={{ animationDelay: "1.2s" }}></div>
                <div className="absolute top-1/2 right-3 w-1.5 h-1.5 bg-green-300 rounded-full animate-healing-particles" style={{ animationDelay: "1.5s" }}></div>
              </>
            )}
            
            {/* Healing wave effect */}
            {isDownloading && (
              <>
                <div className="absolute inset-0 border-2 border-green-400/30 rounded-md animate-healing-wave"></div>
                <div className="absolute inset-0 border-2 border-blue-400/20 rounded-md animate-healing-wave" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute inset-0 border-2 border-purple-400/20 rounded-md animate-healing-wave" style={{ animationDelay: "1s" }}></div>
              </>
            )}
            
            {/* Shimmer effect */}
            {isDownloading && (
              <div className="absolute inset-0 overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/3 h-full animate-healing-shimmer"></div>
              </div>
            )}
            
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            
            {/* Download icon with enhanced animation */}
            <svg 
              className={`w-4 h-4 mr-2 transition-all duration-300 relative z-10 ${
                isDownloading ? 'animate-download-pulse text-white' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            
            {/* Button text with enhanced styling */}
            <span className={`transition-all duration-300 relative z-10 font-medium ${
              isDownloading ? 'text-white drop-shadow-lg' : ''
            }`}>
              {isDownloading ? 'Downloading...' : 'Download Resume'}
            </span>
          </button>
          
          <a 
            href="https://www.linkedin.com/in/prathapselvakumar/"  
            className="btn-secondary group relative overflow-hidden tilt-card"
            target="_blank" 
          >
            <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            LinkedIn 
          </a>
        </div>
      </div>
    </div>
  );
}