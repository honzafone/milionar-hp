import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Deathly_hallows from "../components/deathly_hallows";

const Fame = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "players"));
        const playersData = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => b.score - a.score); // Řazení podle skóre (od největšího k nejmenšímu)
        setPlayers(playersData);
      } catch (err) {
        console.error("Chyba při načítání hráčů:", err.message);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="bg-blue-950 p-6 rounded-lg shadow-lg mt-20">
      <div className="absolute top-0 left-0 right-0">
        <Deathly_hallows position={[-4.9, 2.7, 0]} scale={0.06} />
      </div>

      <h2 className="text-yellow-500 text-2xl font-bold text-center mb-4">Síň slávy</h2>
      <ul className="text-yellow-500">
        {players.length > 0 ? (
          players.map((player) => (
            <li
              key={player.id}
              className="flex justify-between bg-blue-800 p-2 rounded-lg mb-2"
            >
              <span>{player.name}</span>
              <span>{player.score} bodů</span>
            </li>
          ))
        ) : (
          <p className="text-yellow-500">Žádní hráči zatím nehráli.</p>
        )}
      </ul>
    </div>
  );
};

export default Fame;
