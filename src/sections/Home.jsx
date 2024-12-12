import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importujeme hook pro navigaci

const Home = () => {
  const navigate = useNavigate(); // Hook pro přesměrování

  const handleStartQuiz = () => {
    navigate('/game'); // Přesměrování na stránku kvízu
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900/60 via-gray-800/80 to-gray-900/60 text-white">
      {/* Obrázek */}
      <img
        src="assets/milionaire-tr.png"
        alt="milionaire"
        className="lg:mt-[2rem] lg:w-1/3 w-1/2 rounded-full shadow-lg border-2 border-yellow-500 shadow-yellow-500"
      />

      {/* Text */}
      <div className="mt-6 text-center px-8 max-w-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Vítej ve světě čar a kouzel v Bradavicích!
        </h1>
        <p className="text-base md:text-lg">
          Na této stránce nalezneš kvíz, který prověří tvé znalosti, a pokud dojdeš až nakonec, budu rád, když se zapíšeš na tabulku cti.
          <span className="italic"> Nyní už ale ukončit neplechu a hurá na kvíz!</span>
        </p>
      </div>

      {/* Tlačítko */}
      <button
        onClick={handleStartQuiz}
        className="mt-6 px-6 py-3  bg-yellow-500 text-blue-950 font-semibold rounded-lg hover:bg-yellow-400 hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-yellow-700 cursor-pointer"
      >
        Začít kvíz
      </button>
    </div>
  );
};

export default Home;
