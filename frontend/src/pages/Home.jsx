import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../assets/Hero.png';

const Home = ({ language }) => {
  const content = {
    EN: {
      tagline: "Experience Ancient Purity",
      title: "Handmade Vedic Kande for a Positive Home",
      desc: "Specially crafted to remove negative energy and bring spiritual peace. 100% natural and chemical-free.",
      // btn text removed as button is deleted
      owner: "Brand by: Vedic Aroma",

      // Detailed Info Sections
      powerTitle: "The Science of Sacred Elements",
      powerSubtitle: "Deep Scientific Roots & Environmental Protection",
      
      sections: [
        {
          head: "The Bio-Purifying Force (Gobar)",
          icon: "🌿",
          sciTitle: "Scientific Benefits",
          sciPoints: [
            "Thermal Insulation: Naturally regulates home temperature.",
            "Radiation Shield: Research suggests neutralizing Wi-Fi/EMF radiations.",
            "Oxygen Booster: Releases O2 & O3 when burnt with pure Ghee.",
            "Airborne Disinfectant: Eliminates 90% of harmful bacteria in the air."
          ],
          modTitle: "Modern & Spiritual Properties",
          modPoints: [
            "Wealth from Waste: Promotes rural economy.",
            "Spiritual Prosperity: Symbolizes peace and abundance.",
            "Natural Deodorizer: Absorbs odors with an earthy aroma."
          ],
          theme: "emerald"
        },
        {
          head: "The Divine Elixir (Gomutra)",
          icon: "💧",
          sciTitle: "Scientific Benefits",
          sciPoints: [
            "Mineral Rich: Contains 24 minerals like Gold & Iron.",
            "Bio-Enhancer: Increases herb potency in the kande.",
            "Antimicrobial Agent: Powerful natural sanitizer.",
            "Respiratory Aid: Vapors help boost immunity."
          ],
          modTitle: "Modern & Spiritual Properties",
          modPoints: [
            "Aura Cleansing: Removes 'Vastu' related blockages.",
            "Ethical Sourcing: Supports traditional Gaushalas.",
            "Pure Purity: Essence of holy rivers in your home."
          ],
          theme: "blue"
        }
      ],

      // Cow's Role in Environment
      envTitle: "The Mother of Ecosystem",
      envSub: "Role of Cow in Environmental Conservation",
      envPoints: [
        { title: "Saving Forests", text: "100 packs save one full tree from being cut for wood.", icon: "🌳" },
        { title: "Zero Chemical Footprint", text: "Zero toxic fumes, protecting both lungs and the ozone layer.", icon: "🚫" },
        { title: "Premium Plant Food", text: "Leftover ash is a mineral-rich organic fertilizer for plants.", icon: "🌻" }
      ]
    },
    HI: {
      tagline: "प्राचीन शुद्धता का अनुभव करें",
      title: "सकारात्मक ऊर्जा के लिए शुद्ध वैदिक कंडे",
      desc: "नकारात्मक ऊर्जा को दूर करने और आध्यात्मिक शांति लाने के लिए विशेष रूप से निर्मित। 100% प्राकृतिक और रसायन मुक्त।",
      // btn text removed as button is deleted
      owner: "ब्रांड: वैदिक अरोमा",

      powerTitle: "पवित्र तत्वों का विज्ञान",
      powerSubtitle: "गहन वैज्ञानिक आधार और पर्यावरण संरक्षण",
      
      sections: [
        {
          head: "प्राकृतिक शोधक शक्ति (गोबर)",
          icon: "🌿",
          sciTitle: "वैज्ञानिक गुण",
          sciPoints: [
            "थर्मल इन्सुलेशन: घर के तापमान को प्राकृतिक रूप से नियंत्रित करता है।",
            "रेडिएशन कवच: मोबाइल और वाई-फाई (EMF) तरंगों को कम करने में सहायक।",
            "प्राणवायु संचार: घी के साथ जलाने पर ऑक्सीजन और ओजोन बढ़ाता है।",
            "कीटाणुनाशक: हवा में मौजूद 90% तक बैक्टीरिया को नष्ट कर देता है।"
          ],
          modTitle: "आधुनिक एवं आध्यात्मिक गुण",
          modPoints: [
            "अपशिष्ट से आय: ग्रामीण अर्थव्यवस्था को मजबूती देता है।",
            "लक्ष्मी का वास: घर में सुख, शांति और समृद्धि का आह्वान।",
            "प्राकृतिक खुशबू: दुर्गंध सोखकर घर को सोंधी सुगंध से भर देता है।"
          ],
          theme: "emerald"
        },
        {
          head: "दिव्य खनिज अर्क (गोमूत्र)",
          icon: "💧",
          sciTitle: "वैज्ञानिक गुण",
          sciPoints: [
            "खनिजों का भंडार: इसमें स्वर्ण और लोहा जैसे 24 आवश्यक खनिज होते हैं।",
            "बायो-बूस्टर: जड़ी-बूटियों की शक्ति को कई गुना बढ़ा देता है।",
            "प्राकृतिक सैनिटाइजर: घर के वातावरण के लिए एक शक्तिशाली शोधक।",
            "श्वसन सुधार: फेफड़ों की सफाई और रोग प्रतिरोधक क्षमता में वृद्धि।"
          ],
          modTitle: "आधुनिक एवं आध्यात्मिक गुण",
          modPoints: [
            "ओरा की शुद्धि: नकारात्मक ऊर्जा और वास्तु दोषों को दूर करता है।",
            "नैतिक स्रोत: गौशालाओं के संरक्षण और सेवा में योगदान।",
            "पवित्रता का अहसास: घर में देवत्व और पवित्रता का संचार।"
          ],
          theme: "blue"
        }
      ],

      envTitle: "पारिस्थितिकी की जननी",
      envSub: "पर्यावरण संरक्षण में गाय की मुख्य भूमिका",
      envPoints: [
        { title: "वनों की रक्षा", text: "लकड़ी की जगह कंडों का उपयोग पेड़ों को कटने से सीधे बचाता है।", icon: "🌳" },
        { title: "केमिकल मुक्त भविष्य", text: "शून्य जहरीला धुआं, जिससे ओजोन परत और फेफड़े सुरक्षित रहते हैं।", icon: "🚫" },
        { title: "पौधों के लिए अमृत", text: "बची हुई राख पौधों के लिए बेहतरीन जैविक खाद का काम करती है।", icon: "🌻" }
      ]
    }
  };

  const curr = content[language];

  return (
    <div className="bg-[#FFFCF9] text-stone-900 selection:bg-orange-200">
      
      {/* --- SECTION 1: HERO (REFINED - Call Button Removed) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden border-b border-stone-100">
        {/* Abstract Background Element for elegance */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[150px] opacity-60"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-900 text-xs font-bold tracking-[0.2em] rounded-full uppercase shadow-inner">{curr.tagline}</span>
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-stone-950 tracking-tight">{curr.title}</h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">{curr.desc}</p>
            
            {/* Call Button removed from here */}
            
            <div className="pt-6 flex justify-center lg:justify-start items-center gap-2 border-t border-stone-100 mt-10">
              <span className="italic text-stone-500 font-serif text-lg">{curr.owner}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative group">
            {/* Animated central pulse */}
            <div className="absolute inset-0 bg-orange-200 blur-[150px] opacity-25 rounded-full animate-pulse z-0"></div>
            
            <div className="bg-white p-5 rounded-[48px] shadow-2xl relative z-10 border border-stone-100/50 transform transition-transform duration-1000 group-hover:rotate-1">
                {/* Main Image Container */}
                <div className="bg-stone-50 h-[500px] rounded-[38px] flex items-center justify-center overflow-hidden shadow-inner border border-stone-100">
                  <img 
                    src={Hero} 
                    alt="High Quality Kande" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]"
                  />
                </div>
            </div>
            
            {/* Small floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-yellow-500 text-white p-7 rounded-full w-32 h-32 flex items-center justify-center text-center font-bold text-sm shadow-xl z-20 border-4 border-white">
              100%<br/>Handmade<br/>& Pure
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: THE SCIENTIFIC & SPIRITUAL JOURNEY --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif">{curr.powerTitle}</h2>
            <p className="text-orange-700 font-bold uppercase tracking-widest text-xs">{curr.powerSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {curr.sections.map((sec, idx) => (
              <motion.div 
                key={idx} whileHover={{ y: -10 }}
                className="bg-[#FFFCF9] border border-stone-100 rounded-[3rem] p-10 md:p-14 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-7xl">{sec.icon}</span>
                  <span className={`text-[10px] font-black tracking-widest px-4 py-1 rounded-full uppercase ${sec.theme === 'emerald' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>0{idx + 1}</span>
                </div>
                
                <h3 className="text-3xl font-serif mb-8 text-stone-900">{sec.head}</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 border-b pb-2">{sec.sciTitle}</h4>
                    <ul className="space-y-3">
                      {sec.sciPoints.map((p, i) => (
                        <li key={i} className="text-sm text-stone-600 leading-relaxed flex gap-2 italic">
                          <span className="text-orange-400 font-bold">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 border-b pb-2">{sec.modTitle}</h4>
                    <ul className="space-y-3">
                      {sec.modPoints.map((p, i) => (
                        <li key={i} className="text-sm text-stone-600 leading-relaxed flex gap-2 font-medium">
                          <span className="text-yellow-500">◈</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SATTVIK ECO-PROTECTION SECTION: THE DIVINE CYCLE --- */}
      <section className="py-28 px-6 bg-[#FEF9F1] text-stone-900 rounded-t-[5rem] relative overflow-hidden border-t-2 border-orange-100">
        {/* Background Decorative Blob */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-70"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs"
            >
              Eco-Dharma
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-serif text-emerald-950 mt-4 leading-tight">{curr.envTitle}</h2>
            <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">{curr.envSub}</p>
            <div className="w-24 h-1.5 bg-orange-200 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* The Dynamic Cow-Ecosystem Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Air & Trees */}
            <div className="lg:col-span-4 space-y-10 order-2 lg:order-1">
              <motion.div 
                whileHover={{ x: -10, scale: 1.02 }}
                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-r-none rounded-l-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🌳</span>
                   <h4 className="text-xl font-bold text-emerald-900">{curr.envPoints[0].title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{curr.envPoints[0].text}</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: -10, scale: 1.02 }}
                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-r-none rounded-l-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🌬️</span>
                   <h4 className="text-xl font-bold text-emerald-900">{language === 'HI' ? 'वायु शुद्धिकरण' : 'Air Purity'}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {language === 'HI' 
                    ? 'गोबर का औषधीय धुआं हवा से कीटाणुओं को नष्ट कर इसे प्राणवायु से भर देता है।'
                    : 'Dung smoke eliminates airborne germs and fills the atmosphere with life force.'}
                </p>
              </motion.div>
            </div>

            {/* Middle Column: Central Animated Figure (Visual Focus) */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-12 lg:py-0 relative">
              <div className="relative">
                {/* Main Figure */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white shadow-2xl rounded-full flex items-center justify-center border-4 border-emerald-50 relative z-20">
                  <span className="text-8xl md:text-9xl filter drop-shadow-lg">🐄</span>
                </div>
                
                {/* Animated Circle */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 z-10 scale-125"
                >
                   <div className="w-full h-full border-2 border-dashed border-emerald-200/50 rounded-full"></div>
                   <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">🌱</span>
                   <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-2xl">💨</span>
                   <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-2xl">🌍</span>
                   <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-2xl">🌻</span>
                </motion.div>

                {/* Central Glow */}
                <div className="absolute inset-0 bg-emerald-100/50 blur-[70px] rounded-full scale-110 z-0"></div>
              </div>
            </div>

            {/* Right Column: Soil & Chemicals */}
            <div className="lg:col-span-4 space-y-10 order-3">
              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-l-none rounded-r-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🌻</span>
                   <h4 className="text-xl font-bold text-emerald-900">{curr.envPoints[2].title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{curr.envPoints[2].text}</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-l-none rounded-r-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🚫</span>
                   <h4 className="text-xl font-bold text-emerald-900">{curr.envPoints[1].title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{curr.envPoints[1].text}</p>
              </motion.div>
            </div>

          </div>

          {/* Bottom Quiet Grace */}
          <div className="mt-24 pt-12 border-t border-emerald-100/50 text-center">
            <p className="text-emerald-900/60 font-serif text-lg italic tracking-wide">
              {language === 'HI' 
                ? '"प्रकृति और मानवता का सेतु: गौ-संस्कृति।"'
                : '"The bridge between nature and humanity: Cow-culture."'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;