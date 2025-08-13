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
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      id: 2,
      name: "Ministère Education",
      logo: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      id: 3,
      name: "Centre Culturel",
      logo: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      id: 4,
      name: "Banque Africaine",
      logo: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      id: 5,
      name: "ONG Développement",
      logo: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      id: 6,
      name: "Fondation Jeunesse",
      logo: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      id: 7,
      name: "Association Sport",
      logo: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      id: 8,
      name: "Entreprise Tech",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
  ];

  const allPartners = [...partners, ...partners]; // Duplicate for seamless looping

  const itemWidth = 192; // Width of each partner card (w-48 = 192px)
  const totalWidth = itemWidth * partners.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev <= -totalWidth) {
          return 0; // Reset to start for seamless loop
        }
        return prev - 1; // Smooth scroll
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
    <div className="w-full py-12 bg-gradient-to-r from-[#00BC4A] to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Nos Partenaires
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-label="Carousel de partenaires"
        >
          <div
            ref={carouselRef}
            className="flex items-center gap-8 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${position}px)` }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-lg p-4 w-48 h-24 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                role="group"
                aria-label={`Partenaire ${partner.name}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
