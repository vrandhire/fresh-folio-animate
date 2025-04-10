
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 dark:bg-darkBg/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-brandRed">
          Vishal<span className="text-charcoal dark:text-white">Randhire</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {["Home", "About", "Experience", "Skills", "Education", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-brandRed relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brandRed after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-darkBg shadow-md py-4 animate-fade-in">
          <ul className="flex flex-col gap-4 px-4">
            {["Home", "About", "Experience", "Skills", "Education", "Contact"].map((item, index) => (
              <li key={item} className={`animate-slide-up`} style={{ animationDelay: `${index * 50}ms` }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 hover:text-brandRed"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
