
import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.contact-item, .animate-on-scroll');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-slide-up');
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20" ref={contactRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll opacity-0">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 animate-on-scroll opacity-0">
              Feel free to reach out if you have any questions, opportunities, or just want to connect. 
              I'm always open to discussing new projects and challenges.
            </p>
            
            <div className="space-y-4">
              <div className="contact-item">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <Mail className="text-brandRed" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">contact@example.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <Phone className="text-brandRed" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <MapPin className="text-brandRed" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <form className="bg-white dark:bg-darkBg rounded-lg shadow-md p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-charcoal focus:outline-none focus:ring-2 focus:ring-brandRed"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-charcoal focus:outline-none focus:ring-2 focus:ring-brandRed"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-charcoal focus:outline-none focus:ring-2 focus:ring-brandRed"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-charcoal focus:outline-none focus:ring-2 focus:ring-brandRed"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-brandRed hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center w-full"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
