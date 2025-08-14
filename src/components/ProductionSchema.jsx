import ContactBubble from "./ContactBubble";

import SnakeSerpent from "./SnakeSerpent"
import { useRef, useState, useEffect } from "react";



function ProductionSchema() {


  const stepRefs = useRef([]);
  const finalRef = useRef(null);
  const [positions, setPositions] = useState([]);
  
  useEffect(() => {
    const stepPositions = stepRefs.current.map((el) => {
      const rect = el.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY + 10,
        left: rect.left + window.scrollX + 100,
      };
    });
  
    if (finalRef.current) {
      const rect = finalRef.current.getBoundingClientRect();
      stepPositions.push({
        top: rect.top + window.scrollY + 10,
        left: rect.left + window.scrollX + 120,
      });
    }
  
    setPositions(stepPositions);
  }, []);

  





  const steps = [
    {
      title: "Projet validé",
      content: "Le projet est validé. On peut démarrer le processus !",
      color: "bg-green-300 border-green-500 text-green-700",
    },
    {
      title: "Point de partage du projet",
      content:
        "On fait un point pour discuter : vos envies, contraintes, choix de techno, hébergement, etc.",
    },
    {
      title: "Création d'une maquette",
      content:
        "Je crée une maquette selon vos envies design et les contraintes du projet.",
    },
    {
      title: "Validation de la maquette",
      content:
        "Une fois validée, on est tous les deux alignés sur la direction du projet.",
    },
    {
      title: "Développement du Projet",
      content:
        "Je réalise votre site. Chaque projet a son propre rythme : développement, test, livraison, etc.",
    },
  ];

  const finalStep = {
    title: "Fin !",
    content:
      "Le projet est livré. Vous êtes libre, sauf si vous souhaitez me recontacter plus tard.",
    color: "bg-gray-300 border-gray-500 text-gray-700",
  };

  function FestiveCircle() {
    return (
      <div className="relative w-5 h-5">
        <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulseFestive"></div>
        <div className="w-5 h-5 rounded-full border-gray-800 bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500 animate-gradientShift"></div>
      </div>
    );
  }

  return (
    <div className="article-container mt-8 px-2 sm:px-4 gap-y-2 mb-8">
      <h2 className="text-xl sm:text-3xl font-semibold text-center">Comment ça marche ?</h2>
      <ContactBubble />
      {/* Étapes */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-[240px]"
            ref={(el) => (stepRefs.current[index] = el)}
          >
            <div className="flex flex-col items-center w-full sm:w-[240px] relative">
              {index === 0 && (
                <div className={`w-5 h-5 rounded-full border-2 ${step.color ? step.color : ""} z-10`}></div>
              )}
              <div className="bg-white mt-2 sm:mt-4 p-3 sm:p-4 rounded-xl shadow-md border border-gray-200 text-center">
                <h3 className="font-semibold text-md mb-2">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.content}</p>
              </div>
            </div>
            {/* Flèche droite */}
            {index < steps.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
      {/* Flèche vers le bas */}
      <div className="flex justify-center my-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {/* Dernière étape */}
      <div className="flex justify-center" ref={finalRef}>
        <div className="flex flex-col items-center w-full sm:w-[260px] text-center">
          <FestiveCircle />
          <div className="bg-white mt-2 sm:mt-4 p-3 sm:p-4 rounded-xl shadow-md border border-gray-200">
            <h3 className="font-semibold text-md mb-2">{finalStep.title}</h3>
            <p className="text-sm text-gray-700">{finalStep.content}</p>
          </div>
        </div>
      </div>
      {positions.length > 0 && <SnakeSerpent points={positions} />}
    </div>
  );
  
}

export default ProductionSchema;
