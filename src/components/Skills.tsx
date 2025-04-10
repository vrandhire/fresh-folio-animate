
import { useEffect, useRef } from "react";
import { Database, Code, GitBranch, Server, FileText, Users, Terminal, LineChart } from "lucide-react";

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.skill-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "SQL & PostgreSQL", icon: <Database className="text-brandRed" size={24} /> },
    { name: "Jenkins", icon: <GitBranch className="text-brandRed" size={24} /> },
    { name: "Postman API", icon: <Code className="text-brandRed" size={24} /> },
    { name: "AWS", icon: <Server className="text-brandRed" size={24} /> },
    { name: "JIRA", icon: <FileText className="text-brandRed" size={24} /> },
    { name: "Communication", icon: <Users className="text-brandRed" size={24} /> },
    { name: "Service Level Agreements (SLA)", icon: <Terminal className="text-brandRed" size={24} /> },
    { name: "Problem Solving", icon: <Terminal className="text-brandRed" size={24} /> },
    { name: "Product Support", icon: <Users className="text-brandRed" size={24} /> },
    { name: "Tracking Systems", icon: <LineChart className="text-brandRed" size={24} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-charcoal" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll opacity-0">Professional Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  {skill.icon}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll opacity-0">
          <a href="#" className="text-brandRed hover:text-red-700 font-medium">
            Show all 23 skills →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
