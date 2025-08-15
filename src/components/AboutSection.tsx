import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  details: string[];
  achievements?: string[];
};

const educationData: EducationItem[] = [
  {
    id: "msc-robotics",
    degree: "M.Sc in Robotics",
    institution: "University of Manchester, United Kingdom",
    period: "2024-2025",
    status: "Current",
    details: [
      "Specializing in advanced robotics systems and artificial intelligence integration",
      "Focusing on intelligent robotic systems for medical and industrial applications",
      "Studying machine learning algorithms for autonomous robotic decision-making"
    ],
    achievements: ["Merit-based admission", "International student scholarship recipient"]
  },
  {
    id: "btech-cse",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology, India",
    period: "2020-2024",
    status: "Completed",
    details: [
      "Graduated with distinction in Computer Science and Engineering",
      "Specialized in artificial intelligence and machine learning applications",
      "Completed multiple projects in web development and data science"
    ],
    achievements: ["CGPA: 8.49", "Dean's List recipient", "Active member of coding club"]
  }
];
export default function AboutSection() {
  const [activeEducationTab, setActiveEducationTab] = useState(educationData[0].id);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            About <span className="highlight-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Get to know more about my background, education, and career goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bio Section */}
          <Card className={cn(
            "tech-card card-hover animate-fade-in",
            "border-l-4 border-l-primary"
          )}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Personal Bio</h3>
              <p className="mb-4 text-foreground/80">
               I am Prathap Selvakumar, a Software Engineer with a deep passion for the intersection of robotics and artificial intelligence. 
              </p>
              <p className="text-foreground/80">
              With a strong foundation in computer science and hands-on industry experience, I aspire to contribute to the development of intelligent robotic systems that enhance automation, improve precision, and drive innovation across various industries
              </p>
            </CardContent>
          </Card>
          
          {/* Education Section - Tabbed like Experience */}
          <Card className={cn(
            "tech-card card-hover animate-fade-in animation-delay-100 md:col-span-2",
            "border-l-4 border-l-accent"
          )}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Education Tabs */}
                <div className="lg:col-span-5 flex lg:flex-col flex-row lg:border-r border-border lg:pr-4 overflow-x-auto lg:overflow-x-visible">
                  {educationData.map((edu) => (
                    <button
                      key={edu.id}
                      onClick={() => setActiveEducationTab(edu.id)}
                      className={cn(
                        "text-left py-3 px-3 transition-colors border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 lg:border-b-transparent whitespace-nowrap lg:whitespace-normal min-w-max lg:min-w-0",
                        activeEducationTab === edu.id
                          ? "border-l-accent lg:border-l-accent border-b-accent lg:border-b-transparent font-medium text-accent bg-accent/5"
                          : "border-l-transparent lg:border-l-transparent border-b-transparent lg:border-b-transparent hover:border-l-accent/50 lg:hover:border-l-accent/50 hover:border-b-accent/50 lg:hover:border-b-transparent hover:bg-secondary"
                      )}
                    >
                      <h4 className="font-semibold text-sm lg:text-base">{edu.degree}</h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">{edu.institution}</p>
                    </button>
                  ))}
                </div>
                
                {/* Education Content */}
                <div className="lg:col-span-7 lg:pl-4">
                  {educationData.map((edu) => (
                    <div
                      key={edu.id}
                      className={cn(
                        "transition-all duration-300",
                        activeEducationTab === edu.id ? "animate-fade-in" : "hidden"
                      )}
                    >
                      <div className="mb-4">
                        <h4 className="text-lg font-bold">{edu.degree}</h4>
                        <p className="text-accent font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                          <span className="text-muted-foreground">•</span>
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            edu.status === "Current" 
                              ? "bg-accent/20 text-accent" 
                              : "bg-secondary text-secondary-foreground"
                          )}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {edu.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-accent mr-2">•</span>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {edu.achievements && (
                        <div>
                          <h5 className="text-sm font-semibold mb-2">Key Achievements</h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, index) => (
                              <span 
                                key={index} 
                                className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Career Goals */}
          <Card className={cn(
            "tech-card card-hover animate-fade-in animation-delay-200 md:col-span-2 mt-6",
            "border-l-4 border-l-primary/70"
          )}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Career Goals</h3>
              <p className="text-foreground/80">
             I am actively pursuing opportunities for higher education abroad to deepen my expertise in the fields of Artificial Intelligence and Robotics. My ultimate goal is to contribute to groundbreaking research and development that leads to intelligent robotic systems capable of solving real-world challenges, driving innovation, and improving the quality of life across diverse domains.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}