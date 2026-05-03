import React from 'react';
import { useNavigate } from 'react-router-dom';
import ganeshji from '../assets/ganeshji.png';
import piraamid from '../assets/piraamid.png';
import malaa from '../assets/malaa.png';
import Khaad from '../assets/Khaad.png';
import footrest from '../assets/footrest.png';
import pack from '../assets/pack.png';

const ProductPage = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    EN: {
      featured: "Featured Product",
      kandeName: "Vedic Kande Pack",
      price: "₹150/-",
      packInfo: "Pack of 10 Pieces",
      delivery: "Delivery charges extra",
      ingredientsTitle: "Traditional Ingredients",
      otherTitle: "More from Vedic Aroma",
      viewDetails: "View Details",
      contactLabel: "Get In Touch",
      ownerName: "Govind Prasad Awasthi",
      subText: "Vedic Aroma Family",
      ctaText: "Talk directly to place your order or for more info",
      callBtn: "📞 CALL NOW",
      mainImg: pack,
      otherItems: [
        { id: 1, name: "Gobar Ganesh Ji", img: ganeshji },
        { id: 2, name: "Gobar Vastu Pyramid", img: piraamid },
        { id: 3, name: "Gobar Mala", img: malaa },
        { id: 4, name: "Foot Rest", img: footrest },
        { id: 5, name: "Desi Gobar Manure", img: Khaad }
      ],
      ingredients: [
        "Gobar", "Gomutra", "Nau Grah Samidha", "Aam", "Tulsi Ki Lakdi", "Neem", "Karela"
      ]
    },
    HI: {
      featured: "मुख्य उत्पाद",
      kandeName: "वैदिक कंडे पैक",
      price: "₹150/-",
      packInfo: "10 कंडे का पैक",
      delivery: "डिलीवरी शुल्क अलग से लागू होगा।",
      ingredientsTitle: "शुद्ध सामग्रियां (जड़ी-बूटी)",
      otherTitle: "वैदिक अरोमा के अन्य उत्पाद",
      viewDetails: "विवरण देखें",
      contactLabel: "संपर्क करें",
      ownerName: "गोविंद प्रसाद अवस्थी",
      subText: "वैदिक अरोमा परिवार",
      ctaText: "ऑर्डर देने या जानकारी के लिए सीधे बात करें",
      callBtn: "📞 अभी कॉल करें",
      mainImg: pack,
      otherItems: [
        { id: 1, name: "गोबर के गणेश जी", img: ganeshji },
        { id: 2, name: "गोबर की वास्तु पिरामिड", img: piraamid },
        { id: 3, name: "गोबर की माला", img: malaa },
        { id: 4, name: "Foot Rest (स्टैंड)", img: footrest },
        { id: 5, name: "देसी गोबर की खाद", img: Khaad }
      ],
      ingredients: [
        "गोबर", "गोमूत्र", "नौ ग्रह समिधा", "आम ",
        "तुलसी की लकड़ी ", "नीम", "करेला"
      ]
    }
  };

  const current = content[language];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-950 mb-8 md:mb-12 uppercase tracking-tighter">
          Vedic Aroma
        </h1>

        {/* 1. Main Featured Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10 items-start">
          <div className="bg-[#fff9f2] p-5 md:p-8 rounded-3xl border-2 border-orange-100 shadow-xl relative overflow-hidden">
            <span className="absolute -top-1 left-6 md:left-10 bg-orange-700 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-b-xl text-xs md:sm font-bold z-10">
              {current.featured}
            </span>
            <div className="aspect-video bg-orange-50 rounded-2xl mb-4 mt-6 overflow-hidden flex items-center justify-center border border-orange-200 shadow-inner max-h-[300px]">
               <img src={current.mainImg} alt="Main Product" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-2 tracking-tight">{current.kandeName}</h3>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl md:text-5xl font-black text-orange-800">{current.price}</span>
              <span className="text-gray-500 font-bold text-base md:text-xl border-l-2 border-gray-300 pl-3 md:pl-4 uppercase tracking-tighter">{current.packInfo}</span>
            </div>
            <p className="text-red-600 font-bold bg-red-50 inline-block px-3 py-1 rounded-md mb-2 text-xs md:text-sm">* {current.delivery}</p>
          </div>

          {/* Ingredients List */}
          <div className="bg-orange-50 p-5 md:p-8 rounded-3xl border-2 border-orange-200">
            <h4 className="text-xl md:text-2xl font-bold text-orange-900 mb-6 border-b-2 border-orange-200 pb-2 flex items-center gap-2">🍃 {current.ingredientsTitle}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {current.ingredients.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl shadow-sm border border-orange-100 transition hover:scale-102">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-600 shadow-sm"></div>
                  <span className="text-gray-800 font-bold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Other Products Catalog with Hover Details */}
        <div className="mt-12 md:mt-16 mb-20">
          <h4 className="text-2xl md:text-3xl font-bold text-orange-950 mb-8 text-center tracking-tight">{current.otherTitle}</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {current.otherItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/product/${item.id}`)}
                className="group cursor-pointer bg-white border-2 border-orange-50 p-3 md:p-4 rounded-2xl md:rounded-3xl text-center shadow-sm hover:shadow-xl hover:border-orange-200 transition-all relative overflow-hidden"
              >
                {/* Image & Hover Overlay */}
                <div className="w-full aspect-square bg-orange-50 rounded-xl md:rounded-2xl mb-3 md:mb-5 flex items-center justify-center overflow-hidden border border-orange-100 shadow-inner relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* View Details Button (Visible on Hover) */}
                  <div className="absolute inset-0 bg-orange-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                    <span className="bg-white text-orange-950 px-3 py-2 rounded-full text-[10px] md:text-[14px] font-black uppercase tracking-tighter shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {current.viewDetails}
                    </span>
                  </div>
                </div>
                
                {/* Name */}
                <h5 className="font-bold text-orange-900 text-[11px] md:text-sm uppercase leading-tight min-h-[32px] flex items-center justify-center group-hover:text-orange-700 transition-colors">
                  {item.name}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CTA Contact Section */}
        <div className="bg-orange-900 rounded-[2.5rem] shadow-2xl overflow-hidden mb-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/5 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10">
              <span className="text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{current.contactLabel}</span>
              <h3 className="text-white text-2xl md:text-4xl font-serif mb-1">{current.ownerName}</h3>
              <p className="text-orange-200/60 text-xs font-bold uppercase tracking-widest">{current.subText}</p>
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 text-center flex flex-col items-center justify-center gap-6">
              <h2 className="text-white text-lg font-bold">{current.ctaText}</h2>
              <a href="tel:9617015351" className="bg-white text-orange-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-orange-50 transition-all active:scale-95">
                {current.callBtn}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;