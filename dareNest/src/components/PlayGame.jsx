import { useEffect, useRef, useState } from "react";

export default function PlayGame() {
  const [dare, setDare] = useState("");
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);

  const sessionId = localStorage.getItem("sessionId");
  const sessionType = localStorage.getItem("sessionType"); // friends | couple
  const token = localStorage.getItem("token");

  // Play background music based on mode
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = sessionType === "friends" ? 0.25 : 0.18;
      audioRef.current.play().catch(() => {});
    }
  }, [sessionType]);

  const getRandomDare = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/task/random/${sessionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to fetch dare");
        setLoading(false);
        return;
      }

      setDare(data.text);
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 ${
        sessionType === "friends"
          ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"
          : "bg-gradient-to-br from-rose-500 via-pink-600 to-red-600"
      }`}
    >
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source
          src={
            sessionType === "friends"
              ? "/src/assets/friends-play.mp3"
              : "/src/assets/couple-play.mp3"
          }
          type="audio/mpeg"
        />
      </audio>

      {/* Card */}
      <div
        className={`relative w-full max-w-lg p-10 rounded-3xl shadow-2xl text-center ${
          sessionType === "friends"
            ? "bg-white/20 backdrop-blur-xl text-white"
            : "bg-white/25 backdrop-blur-xl text-white"
        }`}
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4">
          {sessionType === "friends" ? "🎉 Dare Time!" : "❤️ Your Dare"}
        </h1>

        {/* Dare Box */}
        <div
          className={`min-h-[120px] flex items-center justify-center text-xl font-semibold p-6 rounded-2xl mb-8 ${
            sessionType === "friends"
              ? "bg-black/30"
              : "bg-black/20"
          }`}
        >
          {loading ? "🎲 Picking a dare..." : dare || "Click below to begin"}
        </div>

        {/* Button */}
        <button
          onClick={getRandomDare}
          className={`w-full py-3 rounded-xl font-bold text-lg transition-transform hover:scale-105 ${
            sessionType === "friends"
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {dare ? "Next Dare 🔄" : "Start Game 🚀"}
        </button>

        {/* Footer Text */}
        <p className="text-xs mt-4 opacity-80">
          {sessionType === "friends"
            ? "Laugh. Dare. Repeat."
            : "Trust. Love. Enjoy the moment."}
        </p>
      </div>
    </div>
  );
}
