import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const currentLink = navLinks.find((link) => link.path === path);
    setActive(currentLink?.name || '');
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-background-primary/80 backdrop-blur-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <Link to="/" className="text-2xl font-bold shrink-0">
            <span className="font-dancing text-3xl sm:text-4xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text hover:scale-105 transition-transform inline-block">
              Vishnu J
            </span>
        </Link>

          {/* Center - Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 text-sm font-display font-semibold tracking-wide transition-colors ${
                  active === link.name
                    ? 'text-[#FFD700]'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                onClick={() => setActive(link.name)}
              >
                {link.name}
              </Link>
          ))}
          </div>

          {/* Right - Resume Button */}
          <Link
            to="/resume"
            className="hidden lg:block px-6 py-2 text-sm font-display font-semibold tracking-wide border-2 border-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 transition-opacity shrink-0"
          >
            Resume
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>

        {/* Mobile Navigation */}
          <motion.div
          initial={false}
            animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden"
          >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-sm font-display font-semibold tracking-wide transition-colors ${
                  active === link.name
                    ? 'text-[#FFD700]'
                    : 'text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={() => {
                  setActive(link.name);
                  setIsOpen(false);
                  }}
                >
                {link.name}
                  </Link>
              ))}
            <Link
              to="/resume"
              className="block px-4 py-2 text-sm font-display font-semibold tracking-wide text-center border-2 border-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 transition-opacity"
            >
              Resume
            </Link>
          </div>
          </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;