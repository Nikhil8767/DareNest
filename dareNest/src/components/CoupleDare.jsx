import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CoupleDare() {
  const [dares, setDares] = useState(Array(10).fill(""));
  const navigate = useNavigate();
  const audioRef = useRef(null);
  

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.18; // soft romantic volume
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const handleChange = (i, value) => {
  setDares(prev => {
    const updated = [...prev];
    updated[i] = value;

    // 👉 If user fills the last input, add 5 more
    if (i === prev.length - 1 && value.trim() !== "") {
      return [...updated, ...Array(5).fill("")];
    }

    return updated;
  });
};


  const submitDares = async () => {
  const token = localStorage.getItem("token");
  const sessionId = localStorage.getItem("sessionId");
  const email = localStorage.getItem("email");
  const mode = localStorage.getItem("sessionType");

  const res = await fetch("http://localhost:5000/api/task/dares", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      sessionId,
      dares: dares.filter(d => d.trim()),email,mode
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data.message || "Failed to save dares");
    return;
  }

  navigate("/play");
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-500 via-pink-600 to-red-600 px-6 relative overflow-hidden">
      
      {/* Romantic Music */}
      <audio ref={audioRef} loop>
        <source src="/src/assets/couple-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-20">
        ❤️ 💕 ❤️ 💖 💗
      </div>

      {/* Card */}
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-lg text-white border border-white/30">
        
        <h1 className="text-4xl font-bold text-center mb-2 tracking-wide">
          Couple Mode ❤️
        </h1>

        <p className="text-center text-sm mb-8 text-white/90">
          Create sweet, playful & crazy dares for each other
        </p>

        {dares.map((d, i) => (
          <input
            key={i}
            placeholder={`Romantic Dare ${i + 1}`}
            className="w-full p-3 rounded-xl mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}

        <button
          onClick={submitDares}
          className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Begin Your Love Game 💞
        </button>

        <p className="text-xs text-center mt-4 text-white/80">
          Let love, laughter & connection guide the game
        </p>
      </div>
    </div>
  );
}
