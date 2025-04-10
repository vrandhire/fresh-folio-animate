
import { useEffect, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const expRef = useRef<HTMLElement>(null);
  
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
    
    if (expRef.current) {
      observer.observe(expRef.current);
    }
    
    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "upGrad",
      type: "Full-time",
      duration: "Jan 2022 - Present · 3 yrs 4 mos",
      location: "Mumbai, Maharashtra, India",
      description: "We works closely with Development team and Testers to get the internal teams issues resolved. Create JIRAs.",
      skills: ["SQL", "Postman API", "+4 skills"]
    },
    {
      title: "Software Specialist",
      company: "eClinicalWorks",
      type: "Full-time",
      duration: "Apr 2016 - Jan 2022 · 5 yrs 10 mos",
      location: "Mumbai, Maharashtra, India",
      description: "Provided specialized software support and implementation services.",
      skills: ["Communication", "Jira", "+8 skills"]
    }
  ];

  return (
    <section id="experience" className="py-20" ref={expRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll opacity-0">Work Experience</h2>
        
        <div className="mt-10">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="bg-white dark:bg-darkBg rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-brandRed mt-1">
                      <img 
                        src={index === 0 ? "/lovable-uploads/f7a90c56-319c-4006-8a15-0336445c12f7.png" : "/lovable-uploads/06786575-2861-468d-9033-0a0d52904fd1.png"} 
                        alt={exp.company} 
                        className="w-5 h-5 mr-2 object-contain"
                      />
                      <p>{exp.company} · {exp.type}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <p>{exp.duration}</p>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin size={16} className="mr-2" />
                      <p>{exp.location}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>{exp.skills.join(", ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
