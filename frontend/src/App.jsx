import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Benefits from './pages/Benefits';
import ProductDetail from './pages/ProductDetail';

function App() {
  const [language, setLanguage] = useState('HI');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'HI' ? 'EN' : 'HI'));
  };

  return (
    <Router>
      {/* मुख्य कंटेनर: 'overflow-x-hidden' मोबाइल पर दाईं तरफ की फालतू जगह को रोकता है */}
      <div className="min-h-screen bg-white w-full overflow-x-hidden flex flex-col">
        
        {/* 1. Navigation Bar */}
        <nav className="flex justify-between items-center px-4 md:px-8 py-4 border-b w-full bg-white sticky top-0 z-50">
          {/* ब्रांड नेम: अब यह लिंक नहीं है, सिर्फ सुंदर टेक्स्ट है */}
          <div className="text-lg md:text-xl font-bold text-orange-950 tracking-tight">
            Vedic Aroma
          </div>
          
          <div className="flex gap-3 md:gap-6 items-center">
            {/* नया Home लिंक यहाँ जोड़ा गया है */}
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-orange-700' : 'text-stone-600 hover:text-orange-700'}`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/benefits" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-orange-700' : 'text-stone-600 hover:text-orange-700'}`
              }
            >
              Benefits
            </NavLink>

            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${isActive ? 'text-orange-700' : 'text-stone-600 hover:text-orange-700'}`
              }
            >
              Products
            </NavLink>

            {/* भाषा बदलने का बटन */}
            <button 
              onClick={toggleLanguage}
              className="bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold active:scale-95 transition-transform"
            >
              {language === 'HI' ? 'English' : 'हिंदी'}
            </button>
          </div>
        </nav>

        {/* 2. Routes Wrapper */}
        <main className="w-full flex-grow overflow-x-hidden">
          <Routes>
            {/* 'index' सुनिश्चित करता है कि साइट खुलते ही होम पेज ही लोड हो */}
            <Route index element={<Home language={language} />} />
            <Route path="/" element={<Home language={language} />} />
            <Route path="/products" element={<ProductPage language={language} />} />
            <Route path="/benefits" element={<Benefits language={language} />} />
            <Route path="/product/:productId" element={<ProductDetail language={language} />} />
            {/* गलत URL होने पर वापस होम पर भेजने के लिए */}
            <Route path="*" element={<Home language={language} />} />
          </Routes>
        </main>

        {/* 3. Footer (Optional) */}
        <footer className="py-6 text-center border-t border-stone-100 bg-stone-50">
           <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
             © 2026 Vedic Aroma
           </p>
        </footer>

      </div>
    </Router>
  );
}

export default App;