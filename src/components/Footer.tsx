
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-brandRed">
              Vishal<span className="text-white">Randhire</span>
            </a>
            <p className="mt-2 text-gray-400">Senior Application Specialist</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brandRed transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vrandhire" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brandRed transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-brandRed transition-all">
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} Vishal Randhire. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
