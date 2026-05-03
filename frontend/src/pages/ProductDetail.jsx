import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Leaf, Shield } from 'lucide-react';

// इमेजेस इम्पोर्ट करें
import ganeshji from '../assets/ganeshji.png';
import piraamid from '../assets/piraamid.png';
import malaa from '../assets/malaa.png';
import footrest from '../assets/footrest.png';
import Khaad from '../assets/Khaad.png';

const ProductDetail = ({ language }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const productData = {
    1: { 
      name: language === 'HI' ? "गोबर के गणेश जी" : "Vedic Gobar Ganesh", 
      img: ganeshji,
      tagline: language === 'HI' ? "सात्विक ऊर्जा और अटूट आस्था" : "Pure Energy & Divine Faith",
      importance: language === 'HI' ? "शास्त्रों के अनुसार गोबर में साक्षात गणेश जी का वास होता है। इन्हें घर में स्थापित करना मंगलकारी है।" : "Lord Ganesha resides in cow dung; placing Him at home is auspicious.",
      benefits: language === 'HI' ? [
        "धार्मिक महत्व: यह सुख-समृद्धि और शांति का मार्ग प्रशस्त करते हैं।",
        "पर्यावरण: 100% इको-फ्रेंडली; विसर्जन के बाद पौधों के लिए खाद बन जाते हैं।",
        "स्वास्थ्य: एंटी-बैक्टीरियल गुण वातावरण को पवित्र रखते हैं।"
      ] : ["Religious: Brings prosperity.", "Eco: Becomes manure.", "Health: Purifies air."]
    },
    2: { 
      name: language === 'HI' ? "वैदिक वास्तु पिरामिड" : "Vedic Vastu Pyramid", 
      img: piraamid,
      tagline: language === 'HI' ? "हस्तनिर्मित एवं पूर्णतः शुद्ध" : "Handcrafted & Divinely Pure",
      importance: language === 'HI' ? "गाय के गोबर को जमीन पर गिरने से पहले ही हाथों से झेलकर (collect) तैयार किया जाता है ताकि ऊर्जा बनी रहे।" : "Collected by hand before touching the ground to preserve energy.",
      benefits: language === 'HI' ? [
        "बहुउपयोग: पूजा घर, ऑफिस या अपनी गाड़ी (Car) में स्थापित कर सकते हैं।",
        "वास्तु: बिना तोड़-फोड़ के वास्तु दोषों को संतुलित करता है।",
        "सुरक्षा: इलेक्ट्रॉनिक रेडिएशन के प्रभाव को कम करने में सहायक।"
      ] : ["Usage: For Puja room, office, or car.", "Vastu: Balances energy.", "Safety: Reduces radiation."]
    },
    3: { 
      name: language === 'HI' ? "गोबर की माला" : "Vedic Gobar Mala", 
      img: malaa,
      tagline: language === 'HI' ? "जप और ध्यान के लिए सर्वोत्तम" : "Ideal for Chanting & Meditation",
      importance: language === 'HI' ? "प्राकृतिक गोबर की माला जप के दौरान मन को शांत और एकाग्र रखती है।" : "Keeps the mind calm during chanting.",
      benefits: language === 'HI' ? [
        "एकाग्रता: मन के भटकाव को कम कर सादगी का अनुभव कराती है।",
        "औषधीय: स्पर्श से मन और शरीर पर सकारात्मक प्रभाव पड़ता है।",
        "ग्रामीण हस्तशिल्प: पूरी तरह हाथों से निर्मित।"
      ] : ["Focus: Reduces distraction.", "Medicinal: Positive effect.", "Craft: Completely handmade."]
    },
    4: { 
      name: language === 'HI' ? "वैदिक फुट रेस्ट (Foot Rest)" : "Vedic Foot Rest", 
      img: footrest,
      tagline: language === 'HI' ? "प्राकृतिक चिकित्सा और डिटॉक्स" : "Natural Therapy & Detox",
      importance: language === 'HI' ? "पैरों के तलवों के जरिए शरीर की गर्मी सोखने का प्राचीन वैदिक तरीका।" : "Ancient way to absorb body heat via feet.",
      benefits: language === 'HI' ? [
        "ब्लड सर्कुलेशन: प्रेशर पॉइंट्स को सक्रिय कर रक्त प्रवाह बेहतर बनाता है।",
        "तनाव मुक्ति: दिनभर की थकान और सूजन में तुरंत राहत।",
        "नींद: मन शांत कर गहरी नींद लाने में सहायक।"
      ] : ["Circulation: Improves blood flow.", "Stress Relief: Reduces fatigue.", "Sleep: Better quality."]
    },
    5: { 
      name: language === 'HI' ? " देशी  गोबर की खाद" : "Organic Desi Manure", 
      img: Khaad,
      tagline: language === 'HI' ? "पौधों के लिए प्राकृतिक पोषण" : "Natural Nutrition for Your Plants",
      importance: language === 'HI' ? " देशी गाय के गोबर से तैयार यह खाद मिट्टी की उपजाऊ शक्ति को बढ़ाती है।" : "Revitalizes soil and boosts growth.",
      benefits: language === 'HI' ? [
        "पौधों का विकास: नाइट्रोजन और फास्फोरस जैसे जरूरी तत्व प्रदान करती है।",
        "सुरक्षित: केमिकल मुक्त, घर के पौधों और किचन गार्डन के लिए सर्वोत्तम।",
        "मिट्टी की सेहत: जल धारण क्षमता बढ़ाकर पौधों को हरा-भरा रखती है।"
      ] : ["Growth: Essential nutrients.", "Safe: Chemical-free.", "Soil Health: Improves moisture."]
    }
  };

  const product = productData[productId];

  if (!product) return <div className="p-20 text-center font-bold">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <nav className="max-w-6xl mx-auto p-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-stone-800 font-bold hover:text-orange-700 transition-colors"
        >
          <ChevronLeft size={20} /> {language === 'HI' ? 'पीछे' : 'Back'}
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left: Balanced Image Container */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover" // ज़ूम हटाया ताकि इमेज साफ दिखे
            />
          </div>
          <p className="mt-4 text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
            100% Handmade • Vedic Aroma
          </p>
        </div>

        {/* Right: Detailed Content */}
        <div className="flex flex-col pt-4">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-950 mb-3 tracking-tight">
            {product.name}
          </h1>
          <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-10">
            {product.tagline}
          </p>

          <div className="space-y-12">
            {/* Importance */}
            <div className="relative">
              <h3 className="flex items-center gap-2 text-[11px] font-black text-stone-900 uppercase tracking-widest mb-4">
                <Shield size={14} /> {language === 'HI' ? 'महत्व और निर्माण' : 'Importance'}
              </h3>
              <p className="text-lg text-stone-700 leading-relaxed font-medium italic border-l-4 border-orange-50 pl-5">
                "{product.importance}"
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="flex items-center gap-2 text-[11px] font-black text-stone-900 uppercase tracking-widest mb-5">
                <Leaf size={14} /> {language === 'HI' ? 'मुख्य लाभ' : 'Benefits'}
              </h3>
              <ul className="space-y-5">
                {product.benefits.map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-700 font-medium">
                    <div className="mt-2 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                    <span className="text-[15px] md:text-base leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;