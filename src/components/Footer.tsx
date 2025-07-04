
import { cn } from "@/lib/utils";
import { ArrowUp, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-8 mt-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold font-poppins">
              <span className="highlight-text">Prathap</span>
              <span className="ml-1 text-foreground">Selvakumar</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              AI Enthusiast | Medical Robotics | Software Engineer
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/prathapselvakumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prathap Selvakumar. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="absolute right-6 bottom-6">
          <a 
            href="#home" 
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
              "shadow-lg"
            )}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
