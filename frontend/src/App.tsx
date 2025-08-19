import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  X,
  Users,
  Share2,
  Heart,
} from "lucide-react";
import { useState } from "react";
import Partners from "./partners/Carrousel";
import StudentCarousel from "./partners/Student";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [likedEvents, setLikedEvents] = useState([]);
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Journée d'Orientation Académique",
      date: "15 Mars 2024",
      time: "14:00 - 17:00",
      location: "Campus Universitaire, Tunis",
      description:
        "Session d'information complète pour aider les nouveaux étudiants dans leur orientation académique. Cette journée comprend des présentations sur les différentes filières disponibles, des rencontres avec les professeurs et des témoignages d'anciens étudiants. Un moment privilégié pour poser toutes vos questions et faire le bon choix pour votre avenir.",
      image:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "upcoming",
      category: "Académique",
      attendees: 150,
      organizer: "Association des Étudiants Africains",
      tags: ["orientation", "études", "conseil"],
    },
    {
      id: 2,
      title: "Soirée Culturelle Africaine",
      date: "22 Mars 2024",
      time: "19:00 - 23:00",
      location: "Centre Culturel, Tunis",
      description:
        "Une célébration exceptionnelle de la diversité culturelle africaine. Au programme : spectacles de danse traditionnelle, concerts de musique africaine contemporaine, exposition d'art et dégustation de spécialités culinaires de différents pays d'Afrique. Une soirée inoubliable pour découvrir et célébrer nos racines communes.",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "upcoming",
      category: "Culturel",
      attendees: 200,
      organizer: "Club Culturel Africain",
      tags: ["culture", "musique", "gastronomie", "art"],
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Conférence sur l'Entrepreneuriat",
      date: "10 Février 2024",
      time: "10:00 - 16:00",
      location: "Hôtel Laico, Tunis",
      description:
        "Une journée enrichissante dédiée à l'entrepreneuriat avec la participation d'entrepreneurs africains établis en Tunisie. Panels de discussion, ateliers pratiques sur la création d'entreprise, sessions de networking et présentations de projets innovants. Plus de 300 participants ont bénéficié de conseils précieux pour développer leurs projets.",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "past",
      category: "Business",
      attendees: 300,
      organizer: "Réseau Entrepreneurs Africains",
      tags: ["entrepreneuriat", "business", "networking"],
    },
    {
      id: 4,
      title: "Tournoi de Football Inter-Associations",
      date: "28 Janvier 2024",
      time: "09:00 - 18:00",
      location: "Stade Municipal, Ariana",
      description:
        "Tournoi sportif mémorable qui a rassemblé 12 associations étudiantes dans un esprit de fair-play et de fraternité. Matchs passionnants, ambiance festive et remise de prix en fin de journée. L'équipe 'Lions d'Afrique' a remporté le trophée après des matchs disputés. Un moment fort de cohésion communautaire.",
      image:
        "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "past",
      category: "Sport",
      attendees: 250,
      organizer: "Fédération Sportive Étudiante",
      tags: ["football", "sport", "compétition", "équipe"],
    },
  ];

  const handleLike = (eventId: number) => {
    if (likedEvents.includes(eventId)) {
      setLikedEvents(likedEvents.filter((id) => id !== eventId));
    } else {
      setLikedEvents([...likedEvents, eventId]);
    }
  };

  const handleShare = async (event) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: event.title,
          text: `${event.title} - ${event.description.substring(0, 100)}...`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Lien de l'événement copié dans le presse-papiers !");
      }
    } catch (err) {
      console.error("Erreur de partage :", err);
      // Fallback pour les navigateurs sans support de l'API Clipboard
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Lien de l'événement copié dans le presse-papiers !");
    }
  };

  const getCategoryStyle = (category) => {
    if (category === "Académique") return "bg-blue-100 text-blue-800";
    if (category === "Culturel") return "bg-purple-100 text-purple-800";
    if (category === "Business") return "bg-orange-100 text-orange-800";
    if (category === "Sport") return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mb-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Événements
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Découvrez nos activités qui renforcent les liens communautaires et
            favorisent l'épanouissement de notre communauté
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Calendar className="w-6 h-6 text-green-600 mr-2" />
            Événements à Venir
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      À Venir
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <button
                    onClick={() => handleLike(event.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedEvents.includes(event.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>{event.attendees} participants</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center space-x-2 text-[#00DB6C] hover:scale-[1.02] transition-all duration-300 group font-medium transition-colors"
                    >
                      <span>Voir les détails</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare(event)}
                      className="p-2 text-gray-400 hover:text-[#00DB6C] transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Clock className="w-6 h-6 text-gray-600 mr-2" />
            Événements Passés
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      Terminé
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <button
                    onClick={() => handleLike(event.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedEvents.includes(event.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>{event.attendees} participants</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center space-x-2 text-[#00DB6C] hover:scale-[1.02] transition-all duration-300 group font-medium transition-colors"
                    >
                      <span>Voir les détails</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare(event)}
                      className="p-2 text-gray-400 hover:text-[#00DB6C] transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 ">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ">
            <div className="relative h-64">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedEvent.status === "upcoming"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {selectedEvent.status === "upcoming" ? "À Venir" : "Terminé"}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(
                    selectedEvent.category
                  )}`}
                >
                  {selectedEvent.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedEvent.title}
                </h2>
                <button
                  onClick={() => handleLike(selectedEvent.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedEvents.includes(selectedEvent.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-red-500" />
                    <span className="text-gray-700">
                      {selectedEvent.location}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">
                      {selectedEvent.attendees} participants
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">
                      Organisateur:
                    </span>
                    <span className="text-gray-700 ml-1">
                      {selectedEvent.organizer}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {selectedEvent.status === "upcoming" && (
                  <button className="flex-1 bg-[#00A63E] text-[#fff] py-3 rounded-lg font-medium hover:bg-[#00BC4A] transition-colors">
                    S'inscrire à l'événement
                  </button>
                )}
                <button
                  onClick={() => handleShare(selectedEvent)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-[#FEFAEA] transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Partager</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Partners />
      <StudentCarousel />
    </section>
  );
};

export default Events;
