import React, { useState } from "react";
import { motion } from "framer-motion";

const Airdrop = () => {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.length < 10) {
      setStatus("⛔ Please enter a valid Sui wallet address.");
      return;
    }
    setStatus("✅ Successfully applied for airdrop!");
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-6 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-white">💸 Claim Your Airdrop</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Enter your Sui wallet address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white mb-4"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg"
        >
          🚀 Submit Airdrop
        </button>
        <p className="mt-4 text-sm text-center text-green-400 dark:text-green-300">{status}</p>
      </form>
    </motion.div>
  );
};

export default Airdrop;