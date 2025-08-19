import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Partners = () => {
  const [position, setPosition] = useState(0);

  const partners = [
    {
      id: 1,
      name: "Université de Tunis",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "Éducation",
    },
    {
      id: 2,
      name: "Ministère de l'Éducation",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "Gouvernement",
    },

    {
      id: 3,
      name: "Centre Culturel International",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "Culture",
    },
    
    {
      id: 4,
      name: "Banque Africaine de Développement",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "Finance",
    },
    {
      id: 5,
      name: "ONG Développement Durable",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "ONG",
    },
    {
      id: 6,
      name: "Fondation de la Jeunesse",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "Social",
    },
    {
      id: 7,
      name: "Association Sportive Nationale",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "Sport",
    },
    {
      id: 8,
      name: "TechCorp Innovation",
      logo: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      category: "Technologie",
    },
  ];

  const allPartners = [...partners, ...partners, ...partners];
  const itemWidth = 200;
  const gap = 15;
  const totalWidth = (itemWidth + gap) * partners.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -totalWidth ? 0 : prev - 0.5));
    }, 30);

    return () => clearInterval(interval);
  }, [totalWidth]);

  const handleNext = () => {
    setPosition((prev) =>
      prev - (itemWidth + gap) <= -totalWidth ? 0 : prev - (itemWidth + gap)
    );
  };

  const handlePrev = () => {
    setPosition((prev) =>
      prev + (itemWidth + gap) > 0
        ? -totalWidth + (itemWidth + gap)
        : prev + (itemWidth + gap)
    );
  };

  return (
    <div className="w-full py-20 bg-[#FEFEFE] from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center  gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Nos Partenaires de Confiance
          </div>
          <h2 className="text-5xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Ensemble vers l'Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez les organisations prestigieuses qui nous accompagnent dans
            notre mission d'innovation et de développement.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl p-4">
            <div
              className="flex items-center py-1 px-12 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(${position}px)`,
                gap: `${gap}px`,
              }}
            >
              {allPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${Math.floor(index / partners.length)}`}
                  className="flex-shrink-0 group cursor-pointer"
                  style={{ width: `${itemWidth}px` }}
                  role="group"
                  aria-label={`Partenaire ${partner.name}`}
                >
                  <div className="bg-[#00A63E] rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 border border-slate-200/50 overflow-hidden">
                    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-1">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-full transition-all duration-300 z-30 hover:bg-white hover:scale-110"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg p-3 rounded-full transition-all duration-300 z-30 hover:bg-white hover:scale-110"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
