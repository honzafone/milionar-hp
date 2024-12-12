import React from 'react';

const About = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-950/80 to-indigo-950/80 text-yellow-500 flex flex-col justify-center items-center px-6 py-10">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">O tomto projektu</h1>
        <p className="text-lg mb-6">
          Tento interaktivní kvíz byl vytvořen jako součást projektu pro zlepšení mých dovedností ve
          vývoji frontendu. Kvíz obsahuje otázky v různých úrovních obtížnosti, které pokrývají širokou škálu
          otázek ze světa Harryho Pottera.
        </p>
        <p className="text-lg mb-6">
          Otázky byly inspirovány obsahem YouTube kanálu CagedDragon. Děkuji tomuto skvělému tvůrci, který poskytl
          zdroj pro tento projekt.
        </p>
        <p className="text-lg mb-6">
          Tento projekt byl vytvořen honzafonem, frontend programátorem, který se specializuje na vývoj
          webových aplikací a neustále se snaží rozšiřovat své dovednosti a znalosti v oblasti moderního
          vývoje webu.
        </p>
        <p className="text-lg">
          Projekt je postaven na Reactu, využívá TailwindCSS pro moderní a responzivní design a je navržen tak, aby
          byl přívětivý a uživatelsky přístupný pro všechny úrovně uživatelů.
        </p>
      </div>
      <div className="mt-10 text-center">
        <a
          href="/"
          className="text-xl font-semibold text-yellow-500 hover:text-yellow-400 transition-all"
        >
          Návrat na hlavní stránku
        </a>
      </div>
    </div>
  );
};

export default About;
