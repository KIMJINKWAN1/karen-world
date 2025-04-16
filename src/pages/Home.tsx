import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

export default function Home() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fef6e4] to-[#fcd5ce] dark:from-[#1f1f1f] dark:to-[#111111] text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 text-sm bg-gray-300 dark:bg-gray-800 text-black dark:text-white py-2 px-4 rounded-full shadow-md"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1 className="text-4xl md:text-6xl font-extrabold">👩‍🦳 Welcome to Karen World</h1>
        <p className="text-lg md:text-xl">
          Where Karens unite for the Web3 revolution. Loud, proud, and decentralized.
        </p>

        <Link
          to="/airdrop"
          className="inline-block px-6 py-3 text-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition"
        >
          🚁 Join the Airdrop
        </Link>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">📊 Tokenomics</h2>
          <img
            src="/tokenomics.png"
            alt="Karen Tokenomics"
            className="w-full max-w-xl mx-auto shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>
    </main>
  );
}