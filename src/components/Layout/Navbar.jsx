import LazyLoad from 'vanilla-lazyload';
import { useState, useEffect } from 'react';
import logo from '../../assets/images/nagcnl-logo-white.png';
import logo2x from '../../assets/images/nagcnl-logo-white@2x.png';
import mobileLogo from "../../assets/images/nagcnl-mobile-logo-white.png";
import mobileLogo2x from "../../assets/images/nagcnl-mobile-logo-white@2x.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenIndexes, setMobileOpenIndexes] = useState([]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileLink = (idx) => {
    setMobileOpenIndexes((prev) =>
        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const listeners = ['load', 'resize', 'orientationchange'];
  for(let listener of listeners) {
    window.addEventListener(listener, () => {
      setMenuOpen(false);
    });
  }

  const upperLinks = [
    { label: 'Hire An Expert', path: 'https://www.nagcnl.org/hire-an-expert/', icon: 'fa-book-reader' },
    { label: 'Donate', path: 'https://www.nagcnl.org/donate/', icon: 'fa-donate' },
    { label: 'Pay Invoice', path: 'https://www.nagcnl.org/pay-invoice/', icon: 'fa-money-bill' }
  ];

  const lowerLinks = [
    {
      label: "Digital Resources",
      links: [
        { label: "Digital Norway Parish Map", path: "https://norwayparishes.com/" },
        { label: "Immigration Books (PDFs)", path: "https://www.nagcnl.org/immigration-books-pdfs/" },
        { label: "Search All Databases",
          path: "https://www.nagcnl.org/databases/",
          links : [
            { label: "Civil War Soldiers", path: "https://www.nagcnl.org/databases/#soldiers" },
            { label: "Birth Records", path: "https://www.nagcnl.org/databases/#birth" },
            { label: "Marriage Records", path: "https://www.nagcnl.org/databases/#marriage" },
            { label: "Cemetery Records", path: "https://www.nagcnl.org/databases/#cemetery" },
            { label: "Immigration", path: "https://www.nagcnl.org/databases/#immigration" },
            { label: "Census", path: "https://www.nagcnl.org/databases/#census" },
          ]
        }
      ]
    },
    {
      label: "Our Library",
      links: [
        { label: "About Our Library", path: "https://www.nagcnl.org/about-our-library/" },
        { label: "Search our Library Catalog", path: "https://nagcnl.catalogaccess.com/" }
      ]
    },
    {
      label: "Research Info",
      links: [
        { label: "Getting Started", path: "https://www.nagcnl.org/getting-started/" },
        { label: "Videos", path: "https://www.nagcnl.org/videos/" }
      ]
    },
    {
      label: "Memberships",
      links: [
        { label: "Levels & Benefits", path: "https://www.nagcnl.org/memberships/" },
        {
          label: "Member Portal", path: "https://www.nagcnl.org/my-account/",
          links: [
            { label: "Norwegian Genealogical Terms", path: "https://www.nagcnl.org/norwegian-genealogical-terms/" },
            { label: "Newsletters", path: "https://www.nagcnl.org/newsletters/" },
            { label: "Webinars", path: "https://www.nagcnl.org/webinars/" }
          ]
        }
      ]
    },
    {
      label: "Events",
      links: [
        { label: "Class Schedule", path: "https://www.nagcnl.org/events/list/?tribe_eventcategory%5B0%5D=49" },
        { label: "Upcoming Events", path: "https://www.nagcnl.org/events/" }
      ]
    },
    {
      label: "About",
      links: [
        { label: "Our Staff", path: "https://www.nagcnl.org/staff/" },
        { label: "Current Leadership", path: "https://www.nagcnl.org/current-leadership/" },
        { label: "History & Mission", path: "https://www.nagcnl.org/history-mission/" },
        { label: "Contact", path: "https://www.nagcnl.org/contact/" }
      ]
    }
  ];

  return (
      <div className="bg-nagcnl-green-dark">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#0000004d] to-[#000000dd] bg-[length:100%_100%] bg-no-repeat"></div>
        <nav className="bg-nagcnl-green px-[20px] bs-xxl:px-[45px] py-[15px] mx-[15px] bs-lg:mx-[30px] bs-xl:mx-[75px] bs-xxl:mx-[100px] relative">
          <div className="flex justify-between items-center">
            <a href="/" className={`shrink-0`}>
              <img
                  src=""
                  alt="NAGCNL Logo"
                  className="hidden h-[50px] bs-xxl:block lazy"
                  data-srcset={`${logo2x} 2x, ${logo} 1x`}
                  data-src={logo}
              />
              <img
                  src=""
                  alt="NAGCNL Logo"
                  className="block h-[50px] bs-xxl:hidden lazy"
                  data-srcset={`${mobileLogo2x} 2x, ${mobileLogo} 1x`}
                  data-src={mobileLogo}
              />
            </a>

            <ul className="hidden bs-xl:flex flex-1 justify-center">
              {upperLinks.map((link, idx) => (
                  <li className="px-[10px]" key={idx}>
                    <a href={link.path} className="text-nagcnl-white font-lora text-[16px] bs-xxxl:px-[25px] whitespace-nowrap">
                      <i className={`fas ${link.icon} text-[14px] mr-[10px]`}></i>
                      {link.label}
                    </a>
                  </li>
              ))}
            </ul>

            <div className="flex items-center">
              <div className="hidden bs-md:flex items-center">
                <a
                    className="d-block nagcnl-btn nagcnl-btn-transparent-light leading-[1.8] !px-[20px] !py-[5px] !whitespace-nowrap"
                    href="https://www.nagcnl.org/login/"
                >
                  Join or Login
                </a>

                <div className="nagcnl-input-group ml-[15px] flex items-center">
                  <a
                      className="nagcnl-btn nagcnl-btn-tertiary leading-[1.8] !px-[20px] !py-[5px] !whitespace-nowrap"
                      href="https://www.nagcnl.org/shop/"
                  >
                    Online Store
                  </a>
                  <div className="separator w-[1px] h-[50px] bg-nagcnl-black" />
                  <a
                      className="d-block nagcnl-btn nagcnl-btn-tertiary leading-[1.8] !px-[20px] !py-[5px] !whitespace-nowrap"
                      href="https://www.nagcnl.org/cart/"
                  >
                    <i className="fas fa-shopping-cart text-[18px] text-nagcnl-green hover:text-nagcnl-white" aria-label="Cart"></i>
                  </a>
                </div>
              </div>

              <div
                  className="clearfix block bs-xl:hidden bs-sm:ml-[15px] px-[8px] cursor-pointer"
                  id="mobile-navigation-toggle"
                  tabIndex="0"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-hidden="true"
              >
                <div className="relative w-[35px] h-[24px] mt-[2px]">
                  <span
                      className={`block absolute h-[3px] w-[35px] bg-nagcnl-white transform transition duration-300 ease-in-out ${
                          menuOpen ? 'rotate-45 top-[10px]' : 'top-0'
                      }`}
                  />
                  <span
                      className={`block absolute h-[3px] w-[35px] bg-nagcnl-white transform transition duration-300 ease-in-out ${
                          menuOpen ? 'opacity-0' : 'top-[10px]'
                      }`}
                  >
                    <span className="sr-only">Main Menu</span>
                  </span>
                  <span
                      className={`block absolute h-[3px] w-[35px] bg-nagcnl-white transform transition duration-300 ease-in-out ${
                          menuOpen ? '-rotate-45 top-[10px]' : 'top-[20px]'
                      }`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden bs-xl:block mt-[15px]">
            <ul className="flex justify-around">
              {lowerLinks.map((link, idx) => (
                  <li key={idx} className={`relative ${activeDropdown === idx ? 'open' : ''}`}>
                    <a
                        {...(link.path ? { href: link.path } : {})}
                        onClick={() => toggleDropdown(idx)}
                        className={`${activeDropdown === idx ? 'text-nagcnl-green bg-nagcnl-white' : 'text-nagcnl-white rounded-b-[5px]'} font-opensans text-[18px] font-bold inline-block cursor-pointer px-[20px] py-[8px] rounded-t-[5px]`}
                    >
                      {link.label}
                      {link.links && (
                          <i className={`fa-solid ${activeDropdown === idx ? 'fa-angle-up' : 'fa-angle-down'} ml-[10px]`} />
                      )}
                    </a>
                    {link.links && activeDropdown === idx && (
                        <ul className="absolute left-0 bg-nagcnl-white shadow-lg z-10 min-w-[250px] rounded-b-[5px] rounded-tr-[5px]">
                          {link.links.map((sublink, subIdx) => (
                              <li key={subIdx} className="relative group">
                                <a
                                    href={sublink.path}
                                    className="block text-nagcnl-black hover:text-nagcnl-green hover:bg-nagcnl-tan px-[20px] py-[7px] whitespace-nowrap font-opensans text-[14px]"
                                >
                                  {sublink.label}
                                </a>
                                {sublink.links && (
                                    <ul>
                                      {sublink.links.map((thirdlink, thirdIdx) => (
                                          <li key={thirdIdx}>
                                            <a
                                                href={thirdlink.path}
                                                className="block text-nagcnl-black hover:text-nagcnl-green hover:bg-nagcnl-tan whitespace-nowrap pl-[30px] pr-[20px] py-[7px] font-opensans text-[14px]"
                                            >
                                              {thirdlink.label}
                                            </a>
                                          </li>
                                      ))}
                                    </ul>
                                )}
                              </li>
                          ))}
                        </ul>
                    )}
                  </li>
              ))}
            </ul>
          </div>

          {menuOpen && (
              <div className="bs-xl:hidden bg-nagcnl-green border-t-[1px] border-nagcnl-white text-nagcnl-black absolute top-full left-0 w-full shadow-lg z-40 px-[30px] py-[30px]" aria-hidden="true">
                <ul className="flex flex-col">
                  {lowerLinks.map((link, idx) => (
                      <li key={idx} className="flex flex-wrap">
                        <a {...(link.path ? { href: link.path } : {})}
                            className="block flex-1 text-left text-nagcnl-white hover:text-nagcnl-tan cursor-pointer py-[4px] text-[18px] leading-[1.8] font-bold font-lora"
                            onClick={() => toggleMobileLink(idx)}
                        >
                          {link.label}
                        </a>
                        {link.links && (
                            <span
                                onClick={() => toggleMobileLink(idx)}
                            >
                                  <i className={`fa-solid ${mobileOpenIndexes.includes(idx) ? 'fa-angle-up' : 'fa-angle-down'} text-nagcnl-white cursor-pointer ml-[10px]`} />
                              </span>
                        )}

                        {link.links && mobileOpenIndexes.includes(idx) && (
                            <ul className="px-[30px] basis-full">
                              {link.links.map((sublink, subIdx) => (
                                  <li key={subIdx}>
                                    <a
                                        {...(sublink.path ? { href: sublink.path } : {})}
                                        className="block text-nagcnl-tan hover:text-nagcnl-tan text-[14px] leading-[2]"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                      {sublink.label}
                                    </a>
                                    {sublink.links && (
                                        <ul className="px-[30px]">
                                          {sublink.links.map((thirdlink, thirdIdx) => (
                                              <li key={thirdIdx}>
                                                <a
                                                    href={thirdlink.path}
                                                    className="block text-nagcnl-tan hover:text-nagcnl-tan text-[14px] leading-[2]"
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                  {thirdlink.label}
                                                </a>
                                              </li>
                                          ))}
                                        </ul>
                                    )}
                                  </li>
                              ))}
                            </ul>
                        )}
                      </li>
                  ))}
                </ul>

                <a
                    className="block w-full nagcnl-btn nagcnl-btn-transparent-light leading-[1.8]  !whitespace-nowrap mt-[15px] text-center"
                    href="https://www.nagcnl.org/login/"
                >
                  Join or Login
                </a>

                <div className="nagcnl-input-group mt-[10px] flex items-center w-full">
                  <a
                      className="nagcnl-btn nagcnl-btn-tertiary leading-[1.8] flex-1 !whitespace-nowrap text-center"
                      href="https://www.nagcnl.org/shop/"
                  >
                    Online Store
                  </a>
                  <div className="separator w-[1px] h-[60px] bg-nagcnl-black" />
                  <a
                      className="d-block nagcnl-btn nagcnl-btn-tertiary leading-[1.8] !whitespace-nowrap"
                      href="https://www.nagcnl.org/cart/"
                  >
                    <i className="fas fa-shopping-cart text-[18px] text-nagcnl-green hover:text-nagcnl-white" aria-label="Cart"></i>
                  </a>
                </div>

                <ul className="flex mt-[30px]">
                  {upperLinks.map((link, idx) => (
                      <li className="px-[10px] flex-1" key={idx}>
                        <a href={link.path} className="text-nagcnl-white font-lora text-[16px] whitespace-nowrap flex flex-col items-center">
                          <i className={`fas ${link.icon} text-[14px] mr-[10px]`}></i>
                          <span>{link.label}</span>
                        </a>
                      </li>
                  ))}
                </ul>
              </div>
          )}
        </nav>
      </div>
  );
};

export default Navbar;