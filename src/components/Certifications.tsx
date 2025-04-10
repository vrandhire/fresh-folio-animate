
import { useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.animate-on-scroll');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-slide-up');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (certRef.current) {
      observer.observe(certRef.current);
    }
    
    return () => {
      if (certRef.current) {
        observer.unobserve(certRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      name: "upGrad - Priceless Learning Programs from upGrad",
      provider: "upGrad",
      date: "Credential ID 2235d490-b592-4453-9e03-b78fb17f310a",
      skills: ["Service-Level Agreements (SLA)", "Product Support", "+7 skills"]
    },
    {
      name: "STAR AWARD FROM UPGRAD",
      provider: "UPGRAD",
      date: "Issued Nov 2022",
      skills: []
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-charcoal" ref={certRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll opacity-0">Certifications & Awards</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-darkBg rounded-lg shadow-md p-6 hover:shadow-lg transition-all animate-on-scroll opacity-0" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-brandRed" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">{cert.provider}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.date}</p>
                  
                  {cert.skills.length > 0 && (
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                      <p>{cert.skills.join(", ")}</p>
                    </div>
                  )}
                  
                  <a href="#" className="inline-flex items-center text-brandRed hover:text-red-700 mt-3 text-sm font-medium">
                    Show credential <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
