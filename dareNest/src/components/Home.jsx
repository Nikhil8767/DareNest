// import React from 'react'

// const Home = () => {
//   return (
//     <div className='bg-red-700'>Home</div>
//   )
// }

// export default Home
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white">
      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold mb-6">
          DareNest 🎲
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          A fun, interactive dare game where <b>you create your own dares</b> 
          and let randomness decide who does what.
        </p>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>

          <Link
            to="/"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* WHY PLAY SECTION */}
      <div className="bg-white text-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Play DareNest?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">🎯 You Control the Dares</h3>
            <p>
              No boring default tasks. You and your friends create dares that
              match your vibe and comfort level.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">🎲 Pure Random Fun</h3>
            <p>
              Every round picks a random dare, keeping the game exciting and
              unpredictable.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">🔒 Safe & Private</h3>
            <p>
              Each game session is private. Your dares belong only to your
              group.
            </p>
          </div>
        </div>
      </div>

      {/* MODES SECTION */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose How You Play
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">🧑‍🤝‍🧑 Play with Friends</h3>
            <p className="mb-4">
              Perfect for parties, trips, or chill hangouts. Create funny,
              crazy, or challenging dares and let the fun begin.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Group-friendly dares</li>
              <li>Laugh-out-loud moments</li>
              <li>Great ice-breaker game</li>
            </ul>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">❤️ Play as a Couple</h3>
            <p className="mb-4">
              Designed for couples who want to connect, laugh, and explore fun
              challenges together.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>Cute & romantic dares</li>
              <li>Deep connection moments</li>
              <li>Private & personal gameplay</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="bg-black bg-opacity-30 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start the Fun?
        </h2>
        <p className="mb-6">
          Create a session, add your dares, and let DareNest do the rest.
        </p>
        <Link
          to="/register"
          className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Play Now 🚀
        </Link>
      </div>
    </div>
  );
}

