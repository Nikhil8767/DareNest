import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CoupleDare() {
  const [dares, setDares] = useState(Array(10).fill(""));
  const navigate = useNavigate();

  const handleChange = (i, value) => {
    const copy = [...dares];
    copy[i] = value;
    setDares(copy);
  };

  const submitDares = async () => {
    const token = localStorage.getItem("token");
    const sessionId = localStorage.getItem("sessionId");

    await fetch("http://localhost:5000/api/task/dares", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        sessionId,
        dares: dares.filter(d => d.trim()),
      }),
    });

    navigate("/play");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white flex items-center justify-center px-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-2xl w-full max-w-lg shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Couple Mode ❤️
        </h1>
        <p className="text-sm text-center mb-6">
          Write romantic, hot & crazy dares
        </p>

        {dares.map((d, i) => (
          <input
            key={i}
            placeholder={`Dare ${i + 1}`}
            className="w-full p-2 rounded mb-3 text-black"
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}

        <button
          onClick={submitDares}
          className="w-full mt-4 bg-red-600 py-2 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Begin Love Game 💕
        </button>
      </div>
    </div>
  );
}
