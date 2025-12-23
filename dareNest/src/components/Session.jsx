// import { useState } from "react";

// const Session=()=>{

//     return(
//         <>
//         <h2>this is select session</h2>
//         </>
//     )
// }

// export default Session;
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Session() {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  // Play background music
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15; // very soft
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const startSession = async (type) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/select/session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sessionType: type }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to create session");
        return;
      }

      localStorage.setItem("sessionId", data.sessionId);
      localStorage.setItem("sessionType", type);

      if (type === "friends") {
  navigate("/friends-dares");
} else {
  navigate("/couple-dares");
}

    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white px-6">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/src/assets/game-music.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-black bg-opacity-40 p-10 rounded-2xl shadow-xl max-w-lg w-full text-center">
        {/* Greeting */}
        <h1 className="text-3xl font-bold mb-3">
          Welcome to DareNest 🎲
        </h1>

        <p className="text-sm mb-8 text-gray-200">
          Choose how you want to play and let the fun begin.
        </p>

        {/* Session Options */}
        <div className="space-y-4">
          <button
            onClick={() => startSession("friends")}
            className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold text-lg"
          >
            🧑‍🤝‍🧑 Play with Friends
          </button>

          <button
            onClick={() => startSession("couple")}
            className="w-full py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition font-semibold text-lg"
          >
            ❤️ Play as a Couple
          </button>
        </div>

        <p className="text-xs mt-6 text-gray-300">
          You’ll add your own dares next
        </p>
      </div>
    </div>
  );
}
