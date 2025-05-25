"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedTitle(props) {
  const t = props.dico;
  const titles = [t.acquisition, t.fusion, t.cession];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // 1s affichage + 1s animation out + 1s animation in approx
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-text text-5xl font-bold  flex flex-col md:flex-row md:items-center md:space-x-2 h-12">
      <span>{t.council}</span>
      <div className="relative text-zinc-600 w-fit text-wrap h-fit md:h-12">
        <AnimatePresence mode="wait">
          <motion.span
            key={titles[index]}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-1 top-0"
          >
            {titles[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </h1>
  );
}
