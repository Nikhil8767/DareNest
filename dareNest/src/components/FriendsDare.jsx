import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function FriendsDare() {
  const [dares, setDares] = useState(Array(10).fill(""));
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.22; // fun but not loud
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

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

    await fetch(`${API_BASE}/api/task/dares`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify({
        sessionId,
        dares: dares.filter(d => d.trim()),email,mode,
      }),
    });

    navigate("/play");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-6 relative overflow-hidden">

      {/* Fun Music */}
      <audio ref={audioRef} loop>
        <source src="/src/assets/friend-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Emojis */}
      <div className="absolute inset-0 pointer-events-none opacity-20 animate-pulse text-4xl flex flex-wrap gap-6 justify-center items-center">
        🎉 😂 🔥 🎯 😜 🕺 💃 🤣
      </div>

      {/* Card */}
      <div className="bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-lg text-white border border-white/30 relative z-10">
        
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-wide">
          Friends Mode 🎉
        </h1>

        <p className="text-center text-sm mb-8 text-white/90">
          Create wild, funny & unforgettable dares for your gang
        </p>

        {dares.map((d, i) => (
          <input
            key={i}
            placeholder={`Fun Dare ${i + 1}`}
            className="w-full p-3 rounded-xl mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}

        <button
          onClick={submitDares}
          className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Let the Chaos Begin 🚀
        </button>

        <p className="text-xs text-center mt-4 text-white/80">
          No limits. Just fun, laughter & memories.
        </p>
      </div>
    </div>
  );
}
