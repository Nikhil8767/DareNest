export default function Footer() {
  return (
    <footer className="bg-red bg-opacity-60 text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            DareNest 🎲
          </h3>
          <p className="text-sm">
            A fun and interactive dare game for friends and couples.
            Create laughter, connection, and unforgettable moments.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-black mb-2">
            connect 
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer text-blue-600 font-bold">Linkedin</li>
            <li className="hover:text-green-400 cursor-pointer te">github</li>
            <li className="hover:text-white cursor-pointer">mail</li>
          </ul>
        </div>

        {/* Credits */}
        <div>
          <h4 className="text-lg font-semibold text-black mb-2">
            Credits
          </h4>
          <p className="text-sm">
            Made with <span className="text-red-400">❤️</span> by{" "}
            <span className="text-white font-semibold">Nikhil Gupta</span>
          </p>
          <p className="text-xs mt-2 opacity-70">
            © {new Date().getFullYear()} Nikhil Gupta. All rights reserved.
          </p>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-400 mt-8">
        DareNest is built for fun & entertainment purposes only.
      </div>
    </footer>
  );
}
