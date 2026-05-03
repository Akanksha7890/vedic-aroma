import React from 'react';

const Benefits = ({ language }) => {
  const content = {
    EN: {
      title: "Why Choose Vedic Aroma?",
      subtitle: "The Science and Spirit Behind Our Tradition",
      sciTitle: "Scientific Benefits",
      spiTitle: "Spiritual Benefits",
      orderText: "Experience the change in your home today.",
      callBtn: "Call to Order Now",
      scientific: [
        {
          head: "Air Purification",
          desc: "Burning cow dung with herbs releases formaldehydes and medicinal smoke that effectively reduces harmful bacteria and pathogens in the air."
        },
        {
          head: "Natural Pesticide",
          desc: "The smoke of Neem and Guggul present in our Kande acts as a natural mosquito repellent and keeps small insects away without chemicals."
        },
        {
          head: "Respiratory Health",
          desc: "Unlike charcoal dhoop, Vedic Kande smoke is non-toxic and helps in clearing the nasal passage according to ancient Ayurveda."
        }
      ],
      spiritual: [
        {
          head: "Removal of Negative Energy",
          desc: "Traditional wisdom says that Vedic smoke cleanses the 'Vastu' of a house, removing negative vibrations and bringing prosperity."
        },
        {
          head: "Agnihotra Effect",
          desc: "Lighting these Kandes at home gives the effect of a small 'Havan' or 'Yagya', attracting divine energy and peace."
        },
        {
          head: "Stress Relief",
          desc: "The natural aroma of Mango wood, Ghee, and Tulsi calms the mind, reduces anxiety, and helps in better meditation."
        }
      ]
    },
    HI: {
      title: "वैदिक अरोमा ही क्यों?",
      subtitle: "हमारी परंपरा के पीछे का विज्ञान और आध्यात्म",
      sciTitle: "वैज्ञानिक लाभ (Scientific)",
      spiTitle: "आध्यात्मिक लाभ (Spiritual)",
      orderText: "आज ही अपने घर में बदलाव का अनुभव करें।",
      callBtn: "ऑर्डर के लिए कॉल करें",
      scientific: [
        {
          head: "वायु शुद्धिकरण",
          desc: "जड़ी-बूटियों के साथ गोबर जलाने से ऐसी औषधीय हवा निकलती है जो हवा में मौजूद हानिकारक बैक्टीरिया और कीटाणुओं को प्रभावी ढंग से कम करती है।"
        },
        {
          head: "प्राकृतिक कीटनाशक",
          desc: "हमारे कंडे में मौजूद नीम और गुग्गुल का धुआं प्राकृतिक मच्छर भगाने का काम करता है और बिना केमिकल के छोटे कीड़ों को दूर रखता है।"
        },
        {
          head: "श्वसन स्वास्थ्य",
          desc: "कोयले वाली धूप के विपरीत, वैदिक कंडे का धुआं गैर-विषैला होता है और आयुर्वेद के अनुसार श्वसन मार्ग को साफ करने में मदद करता है।"
        }
      ],
      spiritual: [
        {
          head: "नकारात्मक ऊर्जा का नाश",
          desc: "पारंपरिक मान्यता है कि वैदिक धुआं घर के 'वास्तु' को शुद्ध करता है, नकारात्मक तरंगों को दूर करता है और सुख-समृद्धि लाता है।"
        },
        {
          head: "अग्निहोत्र का प्रभाव",
          desc: "इन कंडों को घर में जलाने से छोटे 'हवन' या 'यज्ञ' जैसा प्रभाव मिलता है, जो दैवीय ऊर्जा और शांति को आकर्षित करता है।"
        },
        {
          head: "तनाव से मुक्ति",
          desc: "आम की लकड़ी, घी और तुलसी की प्राकृतिक सुगंध मन को शांत करती है, चिंता कम करती है और बेहतर ध्यान लगाने में मदद करती है।"
        }
      ]
    }
  };

  const current = content[language];

  return (
    <div className="bg-[#fdfaf5] min-h-screen py-16 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-950 mb-4 tracking-tight">{current.title}</h1>
          <p className="text-xl text-orange-800 font-medium italic">{current.subtitle}</p>
          <div className="w-24 h-1 bg-orange-300 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Scientific Column */}
          <div>
            <h2 className="text-3xl font-bold text-orange-900 mb-8 flex items-center gap-3">
              <span className="p-2 bg-orange-100 rounded-lg">🔬</span> {current.sciTitle}
            </h2>
            <div className="space-y-8">
              {current.scientific.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-600 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-orange-950 mb-2">{item.head}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Spiritual Column */}
          <div>
            <h2 className="text-3xl font-bold text-orange-900 mb-8 flex items-center gap-3">
              <span className="p-2 bg-orange-100 rounded-lg">🕉️</span> {current.spiTitle}
            </h2>
            <div className="space-y-8">
              {current.spiritual.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-yellow-500 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-orange-950 mb-2">{item.head}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-orange-950 text-white p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <h3 className="text-3xl font-bold mb-4 relative z-10">{current.orderText}</h3>
          <p className="mb-8 text-orange-200 text-lg">100% Pure & Traditional</p>
          <a href="tel:9617015351" className="inline-block bg-white text-orange-950 px-12 py-4 rounded-full font-black text-xl hover:bg-orange-50 transition-all transform hover:scale-105 shadow-xl">
            📞 {current.callBtn}
          </a>
        </div>

      </div>
    </div>
  );
};

export default Benefits;