
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('animate-slide-up');
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10" ref={heroRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/5 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-brandRed shadow-xl animate-on-scroll opacity-0">
              <img 
                src="/lovable-uploads/7cdeeab5-6df6-43bb-87b1-09d90d12864d.png" 
                alt="Vishal Randhire" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
              <p className="text-brandRed font-medium text-lg mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Vishal Randhire
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-charcoal/80 dark:text-white/80 mb-6">
                Senior Application Specialist
              </h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-on-scroll opacity-0" style={{ animationDelay: "400ms" }}>
              As an Application Support Engineer with a strong background in tech and process optimization, 
              I have over 9 years of experience providing technical support, automating tasks, and managing complex systems. 
              Currently at upGrad, I play a pivotal role in resolving technical issues for various internal teams.
            </p>
            
            <div className="flex gap-4 mb-8 animate-on-scroll opacity-0" style={{ animationDelay: "600ms" }}>
              <a href="#contact" className="bg-brandRed hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all">
                Contact Me
              </a>
              <a href="#about" className="border-2 border-brandRed text-brandRed hover:bg-brandRed hover:text-white px-6 py-3 rounded-full font-medium transition-all">
                More About Me
              </a>
            </div>
            
            <div className="flex gap-4 animate-on-scroll opacity-0" style={{ animationDelay: "800ms" }}>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-charcoal hover:bg-brandRed hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vrandhire" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-charcoal hover:bg-brandRed hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vrandhire@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-charcoal hover:bg-brandRed hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
