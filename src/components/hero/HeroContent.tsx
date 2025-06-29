import { RefObject, useState } from 'react';

interface HeroContentProps {
  contentRef: RefObject<HTMLDivElement>;
}

export default function HeroContent({ contentRef }: HeroContentProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    
    // Add a small delay to show the animation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Prathap_Resume.pdf';
    link.download = 'Prathap_SelvaKumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset the downloading state
    setTimeout(() => {
      setIsDownloading(false);
    }, 500);
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
          AI Enthusiast | Software Engineer
        </h2>
        
        <p className="text-lg text-foreground/80 animate-text-reveal" style={{ animationDelay: "300ms" }}>
          Pioneering intelligent systems that bridge the gap between hardware and software.
        </p>
        
        <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start stagger-fade-in">
          <button 
            onClick={handleDownloadResume}
            disabled={isDownloading}
            className={`btn-primary group relative overflow-hidden tilt-card transition-all duration-300 ${
              isDownloading ? 'scale-95 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
            }`}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            
            {/* Download progress bar */}
            {isDownloading && (
              <div className="absolute bottom-0 left-0 h-1 bg-primary-foreground/30 w-full">
                <div className="h-full bg-primary-foreground animate-[slide-in-right_1s_ease-out]"></div>
              </div>
            )}
            
            {/* Icon with animations */}
            <div className={`flex items-center transition-all duration-300 ${isDownloading ? 'animate-pulse' : ''}`}>
              {isDownloading ? (
                // Loading spinner
                <svg 
                  className="w-4 h-4 mr-2 animate-spin" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                // Download icon with bounce animation
                <svg 
                  className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:animate-bounce" 
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
              )}
              
              {/* Button text with typing effect */}
              <span className={`transition-all duration-300 ${isDownloading ? 'text-primary-foreground/80' : ''}`}>
                {isDownloading ? 'Downloading...' : 'Download Resume'}
              </span>
            </div>
            
            {/* Success checkmark animation */}
            {!isDownloading && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-200">
                <svg 
                  className="w-5 h-5 text-green-400 animate-ping" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
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