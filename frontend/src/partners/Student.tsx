import React from "react";
import { Linkedin, Mail } from "lucide-react";

interface Student {
  id: number;
  name: string;
  university: string;
  description: string;
  imageUrl: string;
  month: string;
  linkedinUrl: string;
  email: string;
}


const StudentCarousel: React.FC = () => {
  const students: Student[] = [
    {
      id: 1,
      name: "Alexandre Martin",
      university: "Université de la Sorbonne",
      description:
        "Étudiant brillant en informatique, passionné par l'IA et le développement web.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Mars",
      linkedinUrl: "https://linkedin.com/in/alexandre-martin",
      email: "alexandre.martin@sorbonne.fr",
    },
    {
      id: 2,
      name: "Sophie Dubois",
      university: "École Polytechnique",
      description:
        "Ingénieure spécialisée en énergies renouvelables et développement durable.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Février",
      linkedinUrl: "https://linkedin.com/in/sophie-dubois",
      email: "sophie.dubois@polytechnique.edu",
    },
    {
      id: 3,
      name: "Thomas Leroy",
      university: "HEC Paris",
      description:
        "Étudiant en management international avec une approche entrepreneuriale innovante.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Janvier",
      linkedinUrl: "https://linkedin.com/in/thomas-leroy",
      email: "thomas.leroy@hec.edu",
    },
    {
      id: 4,
      name: "Emma Moreau",
      university: "Sciences Po Lyon",
      description:
        "Passionnée de relations internationales et organisatrice du Model UN.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Décembre",
      linkedinUrl: "https://linkedin.com/in/emma-moreau",
      email: "emma.moreau@sciencespo-lyon.fr",
    },
    {
      id: 5,
      name: "Lucas Bernard",
      university: "Université de Médecine Paris",
      description: "Futur médecin engagé dans la recherche contre le cancer.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Novembre",
      linkedinUrl: "https://linkedin.com/in/lucas-bernard",
      email: "lucas.bernard@medecine-paris.fr",
    },
    {
      id: 6,
      name: "Camille Rousseau",
      university: "École Nationale Supérieure",
      description:
        "Architecte spécialisée dans l'éco-construction et le design durable.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Octobre",
      linkedinUrl: "https://linkedin.com/in/camille-rousseau",
      email: "camille.rousseau@ens.fr",
    },
    {
      id: 7,
      name: "Antoine Petit",
      university: "ESSEC Business School",
      description:
        "Expert en marketing digital et transformation des entreprises.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Septembre",
      linkedinUrl: "https://linkedin.com/in/antoine-petit",
      email: "antoine.petit@essec.edu",
    },
    {
      id: 8,
      name: "Marine Durand",
      university: "Université de Droit Assas",
      description: "Brillante juriste spécialisée en droit international.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Août",
      linkedinUrl: "https://linkedin.com/in/marine-durand",
      email: "marine.durand@assas.fr",
    },
    {
      id: 9,
      name: "Maxime Garcia",
      university: "INSA Toulouse",
      description:
        "Ingénieur aéronautique passionné par l'exploration spatiale.",
      imageUrl: "https://sousse.aesat.net/assets/logo-aesat-CA6dZqDY.png",
      month: "Juillet",
      linkedinUrl: "https://linkedin.com/in/maxime-garcia",
      email: "maxime.garcia@insa-toulouse.fr",
    },
  ];

  const StudentCard: React.FC<{ student: Student }> = ({ student }) => (
    <div className="rounded-2xl mb-5 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group min-w-[400px] h-[200px]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(to right, #00DA6A, #00CB54, #00AB40)",
        }}
      ></div>
      <div className="absolute top-1 right-3 text-gray-800 px-3 py-1 rounded-full text-sm font-bold text-[12px]">
        <span className="text-[#FBE321]">★</span> {student.month}
      </div>

      <div className="flex items-center gap-6 h-full">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#117A43] shadow-lg">
            <img
              src={student.imageUrl}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {student.name}
          </h3>
          <p className="text-[#00A63E] font-semibold mb-3 text-sm">
            {student.university}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {student.description}
          </p>
          <div className="flex gap-3 items-center mt-2 justify-center">
            <a
              href={student.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${student.email}`}
              className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  const CarouselRow: React.FC<{
    students: Student[];
    direction: "left" | "right";
    speed: number;
  }> = ({ students, direction, speed }) => {
    const animationClass =
      direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

    return (
      <div className="overflow-hidden mb-8 relative">
        <div
          className={`flex gap-6 ${animationClass}`}
          style={{
            animationDuration: `${speed}s`,
            width: "fit-content",
          }}
        >
          {[...students, ...students, ...students].map((student, index) => (
            <StudentCard key={`${student.id}-${index}`} student={student} />
          ))}
        </div>
      </div>
    );
  };

  const row1Students = students.slice(0, 3);
  const row2Students = students.slice(3, 6);
  const row3Students = students.slice(6, 9);

  return (
    <div className="min-h-screen bg-gradient-to-br py-12">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
        
        .overflow-hidden:hover .animate-scroll-left,
        .overflow-hidden:hover .animate-scroll-right {
          animation-play-state: paused;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          Étudiant du Mois
        </div>
        <h2 className="text-5xl sm:text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
          Une Excellence à Célébrer
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mb-10 mx-auto leading-relaxed">
          Chaque mois, nous mettons à l'honneur un étudiant exceptionnel dont le
          talent, la persévérance et les accomplissements inspirent toute notre
          communauté. Découvrez ces parcours remarquables qui incarnent l'esprit
          d'excellence et d'innovation.
        </p>

        <CarouselRow students={row1Students} direction="left" speed={60} />

        <CarouselRow students={row2Students} direction="right" speed={65} />

        <CarouselRow students={row3Students} direction="left" speed={55} />
      </div>
    </div>
  );
};

export default StudentCarousel;
