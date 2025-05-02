import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/norway-flag.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Map' },
    { path: '/about', label: 'About us' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className={`w-full z-30 transition-all duration-300 ${
          isScrolled ? 'bg-brand-primary shadow-lg' : 'bg-brand-primary'
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} className="w-10 h-28 mr-2" alt="Norway flag"/>
                <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-brand-text-inverse whitespace-nowrap">
                  Norway's Parishes
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-brand-text-inverse hover:text-brand-secondary transition-colors duration-200 relative py-2
                    ${isCurrentPath(link.path) ? 'font-medium' : ''}
                  `}
                >
                  {link.label}
                  {isCurrentPath(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-secondary"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-8 h-8 focus:outline-none z-50"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <div className="absolute top-1/2 left-1/2 w-6 flex flex-col transform -translate-x-1/2 -translate-y-1/2">
                  <span 
                    className={`block h-0.5 bg-white transform transition-all duration-300 ease-in-out
                      ${isMenuOpen ? 'opacity-0' : 'w-6 -translate-y-1'}`}
                  />
                  <span 
                    className={`block h-0.5 bg-white transition-all duration-200 ease-in-out
                      ${isMenuOpen ? 'opacity-0' : 'w-6'}`}
                  />
                  <span 
                    className={`block h-0.5 bg-white transform transition-all duration-300 ease-in-out
                      ${isMenuOpen ? 'opacity-0' : 'w-6 translate-y-1'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-500 lg:hidden
          ${isMenuOpen ? 'visible' : 'invisible'}
        `}
      >
        {/* Menu Content */}
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ease-in-out bg-brand-primary
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          {/* Close Button */}
          <div className="absolute top-0 right-0 pt-6 pr-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Brand in Menu */}
          <div className="absolute top-0 left-0 pt-4 pl-4 flex items-center">
            <img src={logo} className="w-8 h-20 mr-2" alt="Norway flag"/>
            <span className="font-heading text-2xl font-semibold text-white">
              Norway's Parishes
            </span>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-4xl font-heading text-white hover:text-gray-200
                  transition-colors duration-200 py-4 relative
                  ${isCurrentPath(link.path) ? 'font-medium' : ''}
                `}
                style={{
                  transitionDelay: `${isMenuOpen ? index * 100 : 0}ms`
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {isCurrentPath(link.path) && (
                  <span className="absolute bottom-2 left-0 w-full h-0.5 bg-white"></span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;