import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions.json";
import AddPlayer from "./AddPlayer";
import ImageCard from "../components/ImageCard";

import Lamp from "../components/Lamp";
import Deathly_hallows from "../components/deathly_hallows";
import Nimbus from "../components/Nimbus";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Game = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [score, setScore] = useState(0);
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Rozdělíme otázky podle obtížnosti a vybereme 5 z každé kategorie
    const easyQuestions = shuffleArray(questionsData.easy).slice(0, 5);
    const mediumQuestions = shuffleArray(questionsData.medium).slice(0, 5);
    const hardQuestions = shuffleArray(questionsData.hard).slice(0, 5);

    const allQuestions = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
    setQuestions(allQuestions); // Nastavení otázek do stavu
  }, []);

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return; // Prevence vícenásobných odpovědí
    setSelectedAnswer(index);
    setCorrectAnswer(questions[currentQuestion].correct);

    if (index === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }

    setIsAnimating(true); // Začátek animace

    setTimeout(() => {
      setIsAnimating(false); // Konec animace po 3 sekundách
      setShowNextButton(true); // Zobrazení tlačítka na další otázku
    }, 3000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
      setShowNextButton(false);
    } else {
      setShowAddPlayer(true);
    }
  };

  const handleAddPlayer = (player) => {
    // Resetování hry a přidání hráče do výsledkovky
    setShowAddPlayer(false);
    setScore(0);
    setCurrentQuestion(0); // Restartování kvízu
    navigate("/fame"); // Navigace na stránku s výsledky
  };

  const btnClass = (index) => {
    if (isAnimating && index === correctAnswer) {
      return "w-[90%] h-[4rem] text-lg text-white bg-green-500 animate-pulse border border-green-700 rounded-xl";
    }
    if (index === correctAnswer) {
      return "w-[90%] h-[4rem] text-lg text-white bg-green-500 border border-green-700 rounded-xl";
    }
    if (index === selectedAnswer && index !== correctAnswer) {
      return "w-[90%] h-[4rem] text-lg text-white bg-red-500 border border-red-700 rounded-xl";
    }
    return "w-[90%] h-[4rem] text-lg text-yellow-500 bg-blue-950 border border-yellow-500 rounded-xl hover:bg-blue-800";
  };

  if (questions.length === 0) {
    return <div>Načítání otázek...</div>; // Pokud ještě nejsou otázky načteny
  }

  return (
    <section className="h-screen flex flex-col justify-center items-center relative z-10">
        <div className="absolute top-0 left-0 right-0">
        <Lamp position={[-4.2, -1, 0]} scale={3} />
      </div>
        {/* <div className="absolute top-0 left-0 right-0">
        <Deathly_hallows position={[4, 2, 0]} scale={0.2} />
      </div> */}
      <div className="absolute top-0 left-0 right-0">
        <Nimbus position={[0, -3.1, 0]} scale={1} />
       </div>

      {showAddPlayer ? (
        <AddPlayer score={score} onAddPlayer={handleAddPlayer}  />
      ) : (
        <div className="flex flex-col items-center justify-center z-20">
          <div className="absolute  md:bottom-4 right-4 bg-blue-950 text-yellow-500 px-4 py-2 rounded-lg shadow-lg text-lg z-40">
            Správné odpovědi: {score}
          </div>

          <div className="w-96 h-96">
            <ImageCard
              src="assets/hogwarts.jpg"
              alt="Hogwarts Castle"
              className="additional-image-styles"
              containerClassName="additional-container-styles"
            />
          </div>

          <div className="flex items-center justify-center max-h-40 max-w-4xl lg:w-[56rem] lg:h-[12rem] lg:rounded-3xl text-xl text-yellow-500 bg-blue-950 rounded-xl border-1 border-black shadow-2xl transition-shadow duration-300 ease-in-out shadow-black text-center mt-2 p-4">
            {questions[currentQuestion].question}
          </div>

          <div className="w-[80%] md:w-[90%] lg:w-[56rem] h-[12rem] grid grid-cols-1 md:grid-cols-2 mt-3">
            {questions[currentQuestion].answers.map((answer, index) => (
              <div className="flex flex-col justify-center items-center" key={index}>
                <button className={btnClass(index)} onClick={() => handleAnswer(index)}>
                  {answer}
                </button>
              </div>
            ))}
          </div>

          {showNextButton && currentQuestion < questions.length && (
            <button
              onClick={handleNextQuestion}
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-500 text-blue-950 font-semibold rounded-lg hover:bg-yellow-400 z-10 text-4xl"
            >
              Další otázka
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Game;
