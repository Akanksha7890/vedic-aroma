import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    EN: {
      brand: "Vedic Aroma",
      links: [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Benefits", path: "/benefits" }
      ],
      callBtn: "Call Now"
    },
    HI: {
      brand: "Vedic Aroma",
      links: [
        { name: "होम", path: "/" },
        { name: "प्रोडक्ट्स", path: "/products" },
        { name: "फायदे", path: "/benefits" }
      ],
      callBtn: "अभी कॉल करें"
    }
  };

  const current = content[language];

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfaf5] shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link to="/" className="text-2xl font-bold text-orange-900 tracking-wider">
            {current.brand}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {current.links.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => 
                  isActive ? "text-orange-700 font-bold border-b-2 border-orange-700" : "text-gray-700 hover:text-orange-700 font-medium transition-all"
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <button 
              onClick={() => setLanguage(language === 'EN' ? 'HI' : 'EN')}
              className="ml-4 px-3 py-1 border-2 border-orange-800 text-orange-800 rounded-lg font-bold hover:bg-orange-800 hover:text-white transition-all"
            >
              {language === 'EN' ? 'हिन्दी' : 'English'}
            </button>

            <a href="tel:9617015351" className="bg-orange-700 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-800 shadow-md transform hover:scale-105 transition-all">
              {current.callBtn}
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-orange-900">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-orange-100 p-4 space-y-4">
          {current.links.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="block text-orange-950 font-black text-2xl uppercase tracking-tighter">
              {link.name}
            </Link>
          ))}
          <button onClick={() => {setLanguage(language === 'EN' ? 'HI' : 'EN'); setIsMenuOpen(false)}} className="w-full text-left py-2 text-orange-800 font-bold border-t">
             {language === 'EN' ? 'हिन्दी में बदलें' : 'Switch to English'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;