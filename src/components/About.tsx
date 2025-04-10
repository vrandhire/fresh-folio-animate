
import { useEffect, useRef } from "react";
import { Database, Server, Code, GitBranch } from "lucide-react";

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-charcoal" ref={aboutRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll opacity-0">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As an Application Support Engineer with a strong background in tech and process optimization, 
              I have over 8 years of experience providing technical support, automating tasks, and managing complex systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At upGrad, I play a pivotal role in resolving technical issues for various internal teams, using tools 
              such as SQL Workbench, Jenkins, AWS, and Postman. I'm also the designated SME and SPOC for live platforms, 
              working directly with developers to ensure smooth operations.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm passionate about improving system efficiency, problem-solving, and creating technical solutions 
              that make everyday tasks easier for teams.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="font-medium">Location:</span>
                  <span className="text-gray-600 dark:text-gray-300">Pune, Maharashtra, India</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Experience:</span>
                  <span className="text-gray-600 dark:text-gray-300">8+ Years</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Email:</span>
                  <span className="text-gray-600 dark:text-gray-300">contact@example.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-darkBg rounded-lg p-6 shadow-md transition-all hover:shadow-lg animate-on-scroll opacity-0" style={{ animationDelay: "400ms" }}>
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <Database className="text-brandRed" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Database Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expertise in SQL, PostgreSQL, and database optimization techniques.
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkBg rounded-lg p-6 shadow-md transition-all hover:shadow-lg animate-on-scroll opacity-0" style={{ animationDelay: "600ms" }}>
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <Server className="text-brandRed" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">System Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced technical support and troubleshooting for complex systems.
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkBg rounded-lg p-6 shadow-md transition-all hover:shadow-lg animate-on-scroll opacity-0" style={{ animationDelay: "800ms" }}>
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <Code className="text-brandRed" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">API Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating and managing API integrations using Postman and other tools.
              </p>
            </div>
            
            <div className="bg-white dark:bg-darkBg rounded-lg p-6 shadow-md transition-all hover:shadow-lg animate-on-scroll opacity-0" style={{ animationDelay: "1000ms" }}>
              <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <GitBranch className="text-brandRed" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience with Jenkins, AWS, and other DevOps tools and practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
