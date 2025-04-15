import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-text-inverse">
      <div className="border-t border-brand-primary-light">
        <div className="max-w-full mx-auto px-10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-md text-brand-text-inverse/80">
              © {currentYear} Norway's Parishes. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-md">
              <Link to="/privacy" className="hover:text-brand-secondary transition-colors duration-200" >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-brand-secondary transition-colors duration-200" >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;