
import { useEffect, useRef } from "react";
import { Calendar, GraduationCap } from "lucide-react";

const Education = () => {
  const eduRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.timeline-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-slide-up');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (eduRef.current) {
      observer.observe(eduRef.current);
    }
    
    return () => {
      if (eduRef.current) {
        observer.unobserve(eduRef.current);
      }
    };
  }, []);

  const education = [
    {
      school: "Imperial College Of Engineering and Research",
      degree: "Bachelor's degree, Computer Engineering",
      duration: "2012 - 2015",
      description: "",
      skills: ["Business Communications", "Tracking Systems", "+7 skills"]
    },
    {
      school: "J.T. Mahajan Polytechnic, Faizpur",
      degree: "Diploma, Computer Science",
      duration: "2010 - 2012",
      description: "Grade: A",
      skills: ["Tracking Systems", "Problem Solving", "+5 skills"]
    }
  ];

  return (
    <section id="education" className="py-20" ref={eduRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll opacity-0">Education</h2>
        
        <div className="mt-10">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="bg-white dark:bg-darkBg rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.school}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                    {edu.description && (
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar size={16} className="mr-2" />
                      <p>{edu.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <GraduationCap size={16} />
                  <p>{edu.skills.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
