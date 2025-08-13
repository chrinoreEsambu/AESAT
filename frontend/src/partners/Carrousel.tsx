import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Partners = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const partners = [
    {
      id: 1,
      name: "Université de Tunis",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
    {
      id: 2,
      name: "Ministère Education",
      logo: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
    {
      id: 3,
      name: "Centre Culturel",
      logo: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
    {
      id: 4,
      name: "Banque Africaine",
      logo: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
    {
      id: 5,
      name: "ONG Développement",
      logo: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
    {
      id: 6,
      name: "Fondation Jeunesse",
      logo: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
    {
      id: 7,
      name: "Association Sport",
      logo: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
    {
      id: 8,
      name: "Entreprise Tech",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=200",
    },
  ];

  const allPartners = [...partners, ...partners];

  const itemWidth = 320;
  const totalWidth = itemWidth * partners.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -totalWidth) {
          return 0;
        }
        return prev - 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, totalWidth]);

  const handleNext = () => {
    setPosition((prev) => {
      const newPosition = prev - itemWidth;
      return newPosition <= -totalWidth ? 0 : newPosition;
    });
  };

  const handlePrev = () => {
    setPosition((prev) => {
      const newPosition = prev + itemWidth;
      return newPosition > 0 ? -totalWidth + itemWidth : newPosition;
    });
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Nos Partenaires
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Carousel de partenaires"
        >
          {/* Gradient vert à gauche */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#00DB6C] to-transparent z-10 pointer-events-none"></div>

          {/* Gradient de transition à droite */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={carouselRef}
            className="flex items-center gap-8 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${position}px)` }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 transition-all duration-300 hover:scale-105"
                style={{ width: `${itemWidth}px` }}
                role="group"
                aria-label={`Partenaire ${partner.name}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors z-20"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors z-20"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
