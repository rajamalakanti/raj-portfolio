"use client";

import { useState, useEffect } from "react";
import { Inter, Geist_Mono } from "next/font/google";
import "./hero.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

// Typing effect text sequence
const typingTexts = ["DESIGN.", "RESEARCH.", "SOFTWARE.", "INNOVATION."];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorStyle, setCursorStyle] = useState("|");
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const pauseBetweenWords = 1000;

    if (charIndex < typingTexts[wordIndex].length) {
      setTimeout(() => {
        setCurrentText((prev) => prev + typingTexts[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setCurrentText("");
        setWordIndex((prev) => (prev + 1) % typingTexts.length);
      }, pauseBetweenWords);
    }
  }, [charIndex, wordIndex]);

  useEffect(() => {
    const cursorStyles = ["|", "_", "▮"];
    let i = 0;
    const cursorInterval = setInterval(() => {
      setCursorStyle(cursorStyles[i]);
      i = (i + 1) % cursorStyles.length;
    }, 300);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center h-full bg-black text-white px-6 text-center relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">

        {/* Dynamic Typing Effect */}
        <h1
          className={`relative text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold uppercase tracking-wider ${inter.className}`}
        >
          {currentText}
          <span className="cursor-effect">{cursorStyle}</span>
        </h1>
      </div>

      {/* Tagline */}
      <p
        className={`${geistMono.variable} text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mt-4 sm:mt-6 max-w-md sm:max-w-lg md:max-w-2xl tracking-tight uppercase fade-in`}
      >
        CRAFTING THE NEXT BIG THING.
      </p>

      {/* Hover-Triggered Navigation Buttons */}
      <div
        className={`absolute bottom-10 flex flex-col gap-3 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="/swe"
          className="px-6 py-2 text-sm font-semibold uppercase border border-gray-500 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Software Engineering
        </a>
        <a
          href="/entrepreneurship"
          className="px-6 py-2 text-sm font-semibold uppercase border border-gray-500 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Entrepreneurship
        </a>
        <a
          href="/research"
          className="px-6 py-2 text-sm font-semibold uppercase border border-gray-500 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Research
        </a>
        <a
          href="/about"
          className="px-6 py-2 text-sm font-semibold uppercase border border-gray-500 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          About Me
        </a>
      </div>
    </section>
  );
}