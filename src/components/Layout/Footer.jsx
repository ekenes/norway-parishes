const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-text-inverse">
      <div className="border-t border-brand-primary-light">
        <div className="max-w-full mx-auto px-10 py-4 flex justify-center">
          {/* Copyright */}
          <div className="text-md text-brand-text-inverse/80">
            © {currentYear} Norway's Parishes. All rights reserved.
            
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;