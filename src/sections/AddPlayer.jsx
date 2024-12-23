import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore databáze

const AddPlayer = ({ score }) => {
  const [playerName, setPlayerName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (playerName.trim() === "") {
      setError("Jméno hráče je povinné!");
      return;
    }
    setError(null);

    try {
      // Uložení hráče do Firestore
      await addDoc(collection(db, "players"), {
        name: playerName,
        score,
        timestamp: new Date(),
      });
      navigate("/fame"); // Přesměrování na stránku slávy
    } catch (err) {
      console.error("Chyba při ukládání hráče:", err.message);
      setError("Nepodařilo se uložit hráče. Zkuste to prosím znovu.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center z-20">
        <div className="flex flex-col justify-center items-center h-auto p-6 bg-black-200 rounded-xl">
      <h2 className="text-xl text-yellow-500">Zadejte vaše jméno</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Jméno kouzelníka"
        className="mt-4 p-2 rounded-xl bg-black-300"
      />
      <button
        onClick={handleSubmit}
        className="mt-4 w-[80%] h-[3rem] bg-yellow-500 text-lg rounded-xl hover:bg-yellow-600"
      >
        Zapsat skóre
      </button>
    </div>
    </div>
  );
};

export default AddPlayer;
