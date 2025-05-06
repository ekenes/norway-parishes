import { Link } from 'react-router-dom';
//import logo from '../../assets/images/nagcnl-logo-color.png';
//import logo2x from '../../assets/images/nagcnl-logo-color@2x.png';
import logo from '../../assets/images/nagcnl-logo-white.png';
import logo2x from '../../assets/images/nagcnl-logo-white@2x.png';

const Footer = () => {
  /*
  const currentYear = new Date().getFullYear();

  const leftLinks = [
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
        {
          label: "About Our Library",
          path: "https://www.nagcnl.org/about-our-library/"
        },
        {
          label: "Search our Library Catalog",
          path: "https://nagcnl.catalogaccess.com/"
        }
      ]
    },
    {
      label: "Research Info",
      links: [
        {
          label: "Getting Started",
          path: "https://www.nagcnl.org/getting-started/",
        },
        {
          label: "Videos",
          path: "https://www.nagcnl.org/videos/"
        }
      ]
    },
    {
      label: "Memberships",
      links: [
        {
          label: "Levels & Benefits",
          path: "https://www.nagcnl.org/memberships/",
        },
        {
          label: "Member Portal",
          path: "https://www.nagcnl.org/my-account/",
          links: [
            {
              label: "Norwegian Genealogical Terms",
              path: "https://www.nagcnl.org/norwegian-genealogical-terms/"
            },
            {
              label: "Newsletters",
              path: "https://www.nagcnl.org/newsletters/"
            },
            {
              label: "Webinars",
              path: "https://www.nagcnl.org/webinars/"
            }
          ]
        }
      ]
    },
    {
      label: "Events",
      links: [
        {
          label: "Class Schedule",
          path: "https://www.nagcnl.org/events/list/?tribe_eventcategory%5B0%5D=49"
        },
        {
          label: "Upcoming Events",
          path: "https://www.nagcnl.org/events/"
        }
      ]
    },
    {
      label: "About",
      links: [
        {
          label: "Our Staff",
          path: "https://www.nagcnl.org/staff/"
        },
        {
          label: "Current Leadership",
          path: "https://www.nagcnl.org/current-leadership/"
        },
        {
          label: "History & Mission",
          path: "https://www.nagcnl.org/history-mission/"
        },
        {
          label: "Contact",
          path: "https://www.nagcnl.org/contact/"
        }
      ]
    }
  ];

  const rightLinks = [
    {
      label: 'Hire An Expert',
      path: 'https://www.nagcnl.org/hire-an-expert/',
      icon: 'fa-book-reader'
    },
    {
      label: 'Donate',
      path: 'https://www.nagcnl.org/donate/',
      icon: 'fa-donate'
    },
    {
      label: 'Pay Invoice',
      path: 'https://www.nagcnl.org/pay-invoice/',
      icon: 'fa-money-bill'
    }
  ]
   */

  return (
      <footer className={`bg-nagcnl-green`} >
        <div className={`bs-container`}>
          <div className={`flex flex-col bs-lg:flex-row justify-between items-center text-white`}>

            <a href="/" className={`flex-1 py-[20px] px-[20px]`}>
              <img src=""
                   alt="NAGCNL Logo"
                   className={` lazy`}
                   data-srcset={`${logo2x} 2x, ${logo} 1x`}
                   data-src={logo} // fallback if srcset isn't supported
              />
            </a>

            <a href="https://www.google.com/maps/place/Norwegian+American+Genealogical+Center+and+Naeseth+Library/@43.069947,-89.3902357,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x8806533a6b1b2fa9:0x84085b4e95ed0971!2sNorwegian+American+Genealogical+Center+and+Naeseth+Library!8m2!3d43.0700424!4d-89.3881708!3m4!1s0x8806533a6b1b2fa9:0x84085b4e95ed0971!8m2!3d43.0700424!4d-89.3881708"
               className={`flex flex-1 py-[20px] px-[20px]`}
            >
              <i className={`fas fa-map-marker-alt mt-[3px] mr-[10px] text-[20px]`}></i>
              <div className={`info text-[15px] font-opensans flex-1`}>
                415 West Main Street,<br/>Madison, WI 53703-3116
              </div>
            </a>

            <div className={`lex-1 py-[20px] px-[20px]`}>
              <a href="tel:6082552224" className={`flex`}>
                <i className={`icon fas fa-phone mt-[3px] mr-[10px] text-[20px]`}></i>
                <div className={`info text-[15px] font-opensans flex-1`}>
                  (608) 255-2224
                </div>
              </a>

              <div className={`flex mt-[10px]`}>
                <i className="icon fas fa-building mt-[3px] mr-[10px] text-[20px]"></i>
                <div className={`info text-[15px] font-opensans flex-1`}>
                  FEIN: 35-2282921
                </div>
              </div>
            </div>


          </div>
        </div>
      </footer>
      /*
    <footer className={`bg-nagcnl-white`} >
      <div className={`px-[15px] bs-md:px-[20px] bs-lg:px-[30px] bs-xl:px-[75px] bs-xxl:px-[100px]`}>
        <div className={`pb-[70px] pt-[50px] bs-lg:pt-[150px] px-[15px] bs-sm:px-[45px]`}>
          <div className={`flex flex-wrap pb-[25px] border-b border-nagcnl-black`}>
            <div className={`mb-[20px] bs-xxl:mr-[25px] bs-xxl:basis-auto basis-full grow-0 shrink-0`}>
              <a href="/">
                <img src=""
                     alt="NAGCNL Logo"
                     className={` lazy`}
                     data-srcset={`${logo2x} 2x, ${logo} 1x`}
                     data-src={logo} // fallback if srcset isn't supported
                />
              </a>
            </div>

            <div className={`flex flex-wrap bs-xxl:justify-center mx-[-35px] flex-1`}>
              <a href="https://www.google.com/maps/place/Norwegian+American+Genealogical+Center+and+Naeseth+Library/@43.069947,-89.3902357,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x8806533a6b1b2fa9:0x84085b4e95ed0971!2sNorwegian+American+Genealogical+Center+and+Naeseth+Library!8m2!3d43.0700424!4d-89.3881708!3m4!1s0x8806533a6b1b2fa9:0x84085b4e95ed0971!8m2!3d43.0700424!4d-89.3881708"
                 className={`flex px-[35px] mb-[20px] basis-full bs-sm:basis-auto bs-sm:grow-0 bs-sm:shrink-0 max-w[400px]`}
              >
                <i className={`fas fa-map-marker-alt mt-[3px] mr-[10px] text-[20px]`}></i>
                <div className={`info text-[15px] font-opensans flex-1`}>
                  415 West Main Street,<br/>Madison, WI 53703-3116
                </div>
              </a>

              <div className={`px-[35px] mb-[20px] basis-full bs-sm:basis-auto bs-sm:grow-0 bs-sm:shrink-0 max-w[400px]`}>
                <a href="tel:6082552224" className={`flex`}>
                  <i className={`icon fas fa-phone mt-[3px] mr-[10px] text-[20px]`}></i>
                  <div className={`info text-[15px] font-opensans flex-1`}>
                    (608) 255-2224
                  </div>
                </a>

                <div className={`flex mt-[10px]`}>
                  <i className="icon fas fa-building mt-[3px] mr-[10px] text-[20px]"></i>
                  <div className={`info text-[15px] font-opensans flex-1`}>
                    FEIN: 35-2282921
                  </div>
                </div>
              </div>

              <div className={`flex px-[35px] mb-[20px] flex-1 max-w[400px]`}>
                <i className={`icon fas fa-clock mt-[3px] mr-[10px] text-[20px]`}></i>
                <div className={`info text-[15px] font-opensans flex-1`}>
                  <p>Monday-Friday 9:00 a.m. to 4:00 p.m.<br/>
                    Second Saturday each month 9:00 a.m. to 2:00 p.m.</p>
                </div>
              </div>
            </div>

            <div className={`bs-lg:ml-auto basis-full bs-lg:basis-auto mb-[20px] mx-[-15px]`}>
              <a href="https://www.facebook.com/NorAmGeneCtr/" className={`fab fa-facebook-f text-socials-facebook text-[35px] px-[15px]`} target="_blank" aria-label="Facebook"></a>
              <a href="https://www.youtube.com/watch?v=cO3KPDlRPDs" className={`fab fa-youtube text-socials-youtube text-[35px] px-[15px]`} target="_blank" aria-label="Youtube"></a>
            </div>
          </div>

          <nav className={`flex pt-[50px]`}>
            <div className={`hidden bs-md:block flex-1`}>
              <ul className={`flex flex-wrap mx-[-15px]`}>
                {leftLinks.map((link, idx) => (
                    <li className={`px-[15px] mb-[30px]`}
                        key={idx}
                    >

                      <a
                          {...(link.path
                              ? { href: link.path }
                              : '')}
                          className={`text-nagcnl-black text-opacity-50 font-opensans text-[18px] font-bold`}
                      >
                        {link.label}
                      </a>
                      {link.links && Array.isArray(link.links) && (
                          <ul className={``}>
                            {link.links.map((sublink, subIdx) => (
                                <li key={subIdx} className={`leading-[36px] px-15px`}>
                                  <a
                                      {...(sublink.path
                                          ? { href: sublink.path }
                                          : '')}
                                      className={`text-nagcnl-black hover:text-nagcnl-red hover:underline font-opensans text-[15px]`}
                                  >
                                    {sublink.label}
                                  </a>
                                  {sublink.links && Array.isArray(sublink.links) && (
                                      <ul className={``}>
                                        {sublink.links.map((subsublink, subsubIdx) => (
                                            <li key={subsubIdx} className={`leading-[36px] px-15px`}>
                                              <a
                                                  {...(subsublink.path
                                                      ? { href: subsublink.path }
                                                      : '')}
                                                  className={`text-nagcnl-black font-opensans text-[15px] pl-[10px]`}
                                              >
                                                {subsublink.label}
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
            <div className={`flex bs-md:ml-[70px]`}>
              <ul className={`flex flex-col`}>
                {rightLinks.map((link, idx) => (
                    <li className={`px-[10px]`}
                        key={idx}
                    >

                      <a href={link.path}
                         className={`block text-nagcnl-green hover:text-nagcnl-red text-[20px] font-lora font-bold mb-[17px] transition-colors duration-300`}
                      >
                        {link.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
    */
  );
};

export default Footer;