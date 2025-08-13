import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  status: string;
}
const Events = () => {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Journée d'Orientation Académique",
      date: "15 Mars 2024",
      time: "14:00 - 17:00",
      location: "Campus Universitaire, Tunis",
      description:
        " Session d'information pour aider les nouveaux étudiants dans leur orientation.What is Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Soirée Culturelle Africaine",
      date: "22 Mars 2024",
      time: "19:00 - 23:00",
      location: "Centre Culturel, Tunis",
      description:
        "Célébration de la diversité culturelle africaine avec musique, danse et gastronomie.",
      image:
        "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "upcoming",
    },
  ];

  const pastEvents: Event[] = [
    {
      id: 3,
      title: "Conférence sur l'Entrepreneuriat",
      date: "10 Février 2024",
      time: "10:00 - 16:00",
      location: "Hôtel Laico, Tunis",
      description:
        "Rencontre avec des entrepreneurs africains établis en Tunisie.",
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "past",
    },
    {
      id: 4,
      title: "Tournoi de Football Inter-Associations",
      date: "28 Janvier 2024",
      time: "09:00 - 18:00",
      location: "Stade Municipal, Ariana",
      description:
        "Compétition sportive rassemblant plusieurs associations étudiantes.",
      image:
        "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "past",
    },
  ];

  const EventCard = ({
    event,
    isUpcoming = false,
  }: {
    event: Event;
    isUpcoming: boolean;
  }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group">
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              isUpcoming
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {isUpcoming ? "À Venir" : "Passé"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
        <p className="text-gray-600 mb-4  line-clamp-3">{event.description}</p>

        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>

        {isUpcoming && (
          <button className="mt-4 inline-flex items-center space-x-2 text-green-600 hover:text-blue-700 font-medium">
            <span>En savoir plus</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*  Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Événements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos activités qui renforcent les liens communautaires et
            favorisent l'épanouissement
          </p>
        </div>

        {/* Upcoming Events  */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Calendar className="w-6 h-6 text-green-600 mr-2" />
            Événements à Venir
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} isUpcoming={true} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Événements Passés
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isUpcoming={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
